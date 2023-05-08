const express = require("express");
const router = express.Router();

const doctorController = require('../../controller/doctor-controller')

router.get("/", doctorController.getDoctor);
router.get("/experties/:expertise", doctorController.getDoctorByExperties)

router.post("/create", doctorController.createDoctor);


module.exports = router;