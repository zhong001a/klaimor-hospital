const express = require("express");
const router = express.Router();

const doctorController = require('../../controller/doctor-controller')

router.get("/", doctorController.getAllDoctors);
router.get("/expertise", doctorController.getDoctor);
router.get("/experties/:expertise", doctorController.getDoctorByExperties)

router.post("/create", doctorController.createDoctor);
router.post("/create/appoint", doctorController.createAppoin);



module.exports = router;