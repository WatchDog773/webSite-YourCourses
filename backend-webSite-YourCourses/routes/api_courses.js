// Importamos express
const express = require("express");
const router = express.Router();

// Exportar el controlador
const coursesController = require("../controllers/coursesController");

// Exportar la configuración de seguridad
const securityConfig = require("../config/security");

router.get("/allCourses", coursesController.chargeAllCourses);
router.get("/one/:id", coursesController.chargeOneCourse);

router.post("/new", securityConfig.verifyUser, coursesController.createCourse);

router.put(
  "/update/:id",
  securityConfig.verifyUser,
  coursesController.updateCourse
);

module.exports = router;
