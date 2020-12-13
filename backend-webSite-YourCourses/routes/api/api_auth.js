// Importamos express
const express = require("express");
const router = express.Router();

/* // Importamos passport
const passport = require("passport"); */

/* // Hacemos referencia a la clase
const authAndUserModel = require("../models/authAndUser");
const modelAuthAndUser = new authAndUserModel(); */

// Exportar la configuración de seguridad
const securityConfig = require("../../config/security");

// Exportar el controlador
const authAndUserController = require("../../controllers/authAndUserController");

// Sign in
router.post("/signin", authAndUserController.signUp);

router.post("/login", authAndUserController.logIn);

//router.get("/test", securityConfig.verifyUser, authAndUserController.test);

module.exports = router;
