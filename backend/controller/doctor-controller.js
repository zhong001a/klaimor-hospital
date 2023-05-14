const HttpError = require('../models/http-error');


const Appointment = require('../models/appointment');
const Doctor = require('../models/doctor')
const User = require('../models/user.model')
const  mongoose  = require("mongoose");

const createDoctor = async (req, res, next) =>{
    const { imageUrl, name, expertise } = req.body;

    let exitDoctor
    try {
        exitDoctor = await Doctor.findOne({ name: name });
    } catch (error) {
    const err = new HttpError(
        "Something went wrong, could not find doctor'name .",
        500
    );
        return next(err);
    }
    if(exitDoctor){
        const err = new HttpError(
            "Doctor has already exit .",
        500
        )
        return next(err);
    }

    const createDoctor = new Doctor({
        imageUrl,
        name,
        expertise
    })

    try {
        await createDoctor.save();
      } catch (error) {
        const err = new HttpError("Could not create user.", 500);
        return next(err);
      }

    res.json({ createDoctor });
}

const getDoctor = async (req, res, next) =>{

    let doctors; 

    try {
        doctors = await Doctor.find().distinct( "expertise" );
    } catch (error) {
        const err = new HttpError("Could not find doctor. ",500);
        return next(err);
    }

    res.json({ doctors : doctors });
    // .map(doctor => doctor.toObject({getters: true}))
}

const getDoctorById = async (req, res, next) =>{
    const doctorId = req.params.did;

    let doctor; 

    try {
        doctor = await Doctor.findById(doctorId);
    } catch (error) {
        const err = new HttpError("Could not find doctor. ",500);
        return next(err);
    }

    res.json({ doctor });
    // .map(doctor => doctor.toObject({getters: true}))
}

const getDoctorByExperties = async (req, res, next) =>{
    const expertise = req.params.expertise;
    let doctors;

    try{
        doctors = await Doctor.find({ expertise : expertise });
    }catch(error){
        const err = new HttpError("Get doctors by experties error.");
        return next(err);
    }

    if(!doctors){
        const err = new HttpError("No doctors expertise.");
        return next(err);
    }

    res.json({ doctors : doctors });
}

const createAppoin = async (req, res, next) =>{
    const { name, phone, email, expertise, symptom, userId } = req.body;

    let createAppoint;

    createAppoint = new Appointment({
        name,
        phone,
        email,
        expertise,
        symptom,
        userId
    })

    // try {
    //     await createAppoint.save();
    // } catch (error) {
    //     const err = new HttpError("Could not create appoint.", 500);
    //     return next(err);
    // }

    res.json({  appointment: createAppoint })
   
}

const createAppointDoctor = async (req, res, next) =>{
    const { symptom, doctorId, userId } = req.body;

    let userData ;
    let user;
    let doctor;
    let createAppoint;
     // user
     try {
        user  = await User.findById(userId);
        
    } catch (error) {
        const err = new HttpError(
            'Coud not find userId, try again.',
            500
          );
          return next(err);
    }
    if (!user) {
        const error = new HttpError('Could not find userId for provided id', 404);
        return next(error);
    }

    // user data
    try {
        userData = await User.findById(userId).populate('userdata')
    
      } catch (error) {
        const err = new HttpError("Could not find user data by user id . ");
        return  next(err)
      }

      // doctor
      try {
          doctor  = await Doctor.findById(doctorId);
          
      } catch (error) {
          const err = new HttpError(
              'Coud not find userId, try again.',
              500
            );
            return next(err);
      }

      if(!doctor){
        const err = new HttpError("Could not find doctor data by doctor id . ");
        return  next(err)
      }
      
      createAppoint = new Appointment({
          name:user.username,
          phone:userData.phone,
          email:userData.email,
          expertise:doctor.expertise,
          symptom,
          doctorId,
          userId
      })

      try {
          const sess = await mongoose.startSession();
          sess.startTransaction();
          await createAppoint.save({ session: sess });
          user.userappoint.push( createAppoint );
          doctor.appoint.push( createAppoin );
          await doctor.save({ session: sess});
          await user.save({ session: sess});
          await sess.commitTransaction()
 
    } catch (error) {
      const err = new HttpError(
          'Creating appointment failed , please try again.',
          500
        );
        return next(error);
    }

    res.json({  appointment: createAppoint })

}

const getAllDoctors = async (req, res, next) =>{
    let doctors;

    try{
        doctors = await Doctor.find();
    }catch(error){
        const err = new HttpError("Get doctors by experties error.");
        return next(err);
    }

    if(!doctors){
        const err = new HttpError("No doctors expertise.");
        return next(err);
    }

    res.json({ doctors : doctors });

}

exports.createDoctor = createDoctor;
exports.getDoctor = getDoctor;
exports.getDoctorById =getDoctorById;
exports.getDoctorByExperties = getDoctorByExperties;
exports.createAppoin = createAppoin;
exports.getAllDoctors = getAllDoctors;
exports.createAppointDoctor = createAppointDoctor;