const express = require("express");
const router = express.Router();

const doctorController = require('../../controller/doctor-controller')

router.get("/", doctorController.getAllDoctors);
router.get("/:did", doctorController.getDoctorById);
router.get("/expertise", doctorController.getDoctor);
router.get("/experties/:expertise", doctorController.getDoctorByExperties)
router.get("/appointment/:userId", doctorController.getAppointByUserId)

router.post("/create", doctorController.createDoctor);
router.post("/create/appoint", doctorController.createAppoin);
router.post("/create/appoint/:did", doctorController.createAppointDoctor);



module.exports = router;