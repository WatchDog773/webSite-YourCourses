// Importamos express
const express = require("express");
const router = express.Router();

// Exportar el controlador
const coursesController = require("../controllers/coursesController");

// Exportar la configuración de seguridad
const securityConfig = require("../config/security");

router.get("/allCourses", coursesController.chargeAllCourses);

router.post("/new", securityConfig.verifyUser, coursesController.createCourse);

module.exports = router;
