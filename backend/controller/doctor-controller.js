const HttpError = require('../models/http-error');


const Appointment = require('../models/appointment');
const Doctor = require('../models/doctor')

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
    const { name, phone, email, expertise, symptom } = req.body;

    const createAppoint = new Appointment({
        name,
        phone,
        email,
        expertise,
        symptom
    })

    try {
        await createAppoint.save();
    } catch (error) {
        const err = new HttpError("Could not create Appointment.", 500);
        return next(err);
    }

    res.status(201).json({ data: createAppoint})
}


exports.createDoctor = createDoctor;
exports.getDoctor = getDoctor;
exports.getDoctorByExperties = getDoctorByExperties;
exports.createAppoin = createAppoin