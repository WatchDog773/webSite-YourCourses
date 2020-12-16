// Importamos express
const express = require("express");
const router = express.Router();

// Exportar el controlador
const coursesController = require("../../controllers/coursesController");

// Exportar la configuración de seguridad
const securityConfig = require("../../config/security");

router.get("/allCourses", coursesController.chargeAllCourses); // Trae todos los cursos
router.get("/one/:id", coursesController.chargeOneCourse); // Trae un curso por id
router.get("/:author", coursesController.chargeAllCoursesByAuthor); // Trae todos los cursos por usuario o autor
router.get(
  "/:id/lesson/:lessonId",
  securityConfig.verifyUser,
  coursesController.updateLesson
);

// TODO: LECCIONES
router.get("/lessons/:idCourse", coursesController.getLessons);
router.get("/inscription/:userId", coursesController.mysubscrib);

router.post("/new", securityConfig.verifyUser, coursesController.createCourse); // Crea un nuevo curso

router.put(
  "/update/:id",
  securityConfig.verifyUser,
  coursesController.updateCourse
); // Actualiza el curso por id de curso
router.post(
  "/addLesson/:id",
  securityConfig.verifyUser,
  coursesController.addLesson
);
router.put(
  "/:id/lesson/:lessonId",
  securityConfig.verifyUser,
  coursesController.updateLesson
);

router.put(
  "/:userId/course/:courseId",
  securityConfig.verifyUser,
  coursesController.subscribe
);

// Nuevos

router.get(
  "/:idCourse/inscription/:idUser",
  securityConfig.verifyUser,
  coursesController.verifySubscription
);

module.exports = router;
