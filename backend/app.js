const express = require('express')
const bodyPaser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors')
const dotenv = require("dotenv")
const HttpError = require('./models/http-error')
const app = express ();

app.use(bodyPaser.json());
app.use(cors());
dotenv.config();

//import router
const userRoute = require('./routes/users/user-route')

//api 
app.use('/api/users',userRoute);


//return error
app.use((req, res, next) => {
    const error = new HttpError('Could not find this route.', 404);
    throw error;
});
  
app.use((error, req, res, next) => {
if (res.headerSent) {
    return next(error);
}
    res.status(error.code || 500);
    res.json({ message: error.message || 'An unknown error occurred!' });
});
  
//start sever
mongoose
.connect(`${process.env.DATABASE}`)
.then(()=>{
    app.listen(4040,() => console.log(`Start ... http://localhost:4040`));

})
.catch(err => {
    console.log(err)
});