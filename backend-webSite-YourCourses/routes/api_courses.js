// Importamos express
const express = require("express");
const router = express.Router();

// Exportar el controlador
const coursesController = require("../controllers/coursesController");

// Exportar la configuración de seguridad
const securityConfig = require("../config/security");

router.get("/allCourses", coursesController.chargeAllCourses); // Trae todos los cursos
router.get("/one/:id", coursesController.chargeOneCourse); // Trae un curso por id
router.get("/:author", coursesController.chargeAllCoursesByAuthor); // Trae todos los cursos por usuario o autor

router.post("/new", securityConfig.verifyUser, coursesController.createCourse); // Crea un nuevo curso

router.put(
  "/update/:id",
  securityConfig.verifyUser,
  coursesController.updateCourse
); // Actualiza el curso por id de curso
router.put(
  "/addLesson/:id",
  securityConfig.verifyUser,
  coursesController.addLesson
);

module.exports = router;
