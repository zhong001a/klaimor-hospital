const userModel = require("../models/user.model");
const userDataModel = require('../models/user-data.model')
const HttpError = require('../models/http-error');
const  mongoose  = require("mongoose");


const getUser = async (req, res, next) => {
    let users;

    try {
        users = await userModel.find({}, '-password');
    } catch (error) {
        const err = new HttpError('Fetch users failed, ', 500)
        return next(err);
    }

    res.json({ users: users.map(user => user.toObject({getters: true})) });
};



const createUser = async (req, res, next) =>{
    const { username, email, password } = req.body;

    let isExitUser;

    try {
      isExitUser = await userModel.findOne({ email: email });
    } catch (error) {
      const err = new HttpError(
        "Something went wrong, could not find email .",
        500
      );
      return next(err);
    }

    if (isExitUser) {
        const error = new HttpError("Email already used.", 422);
        return next(error);
    }

    const createUser = new userModel({
        username,
        email,
        password,
        userdata:[]
    })

    try {
        await createUser.save();
      } catch (error) {
        const err = new HttpError("Could not create user.", 500);
        return next(err);
      }
    
    res.json({data : createUser })
}
const createDataUser = async (req, res, next) =>{
    const { firstname, lastname, gender, birthdate, heigth, weight, userId } = req.body;

    const createDataUser = new userDataModel({
        firstname, 
        lastname, 
        gender, 
        birthdate, 
        heigth, 
        weight,
        userId
    })

    let user;
    try {
        user  = userModel.findById(userId);
        res.json({user : user})
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

    try {
        const sess = await mongoose.startSession();
        sess.startTransaction();
        await createDataUser.save({ session: sess });

        user.userdata.push( createDataUser );
        await user.save({ session: sess});
        await sess.commitTransaction()

    } catch (error) {
        const err = new HttpError(
            'Creating data user failed can not find user, please try again.',
            500
          );
          return next(err);
    }

    res.json({data : user.toObject({getters:true}) })
}

exports.getUser = getUser;
exports.createUser = createUser;
exports.createDataUser = createDataUser;
