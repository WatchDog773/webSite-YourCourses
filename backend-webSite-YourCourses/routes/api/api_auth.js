// Importamos express
const express = require("express");
const router = express.Router();

// Exportar la configuración de seguridad
const securityConfig = require("../../config/security");

// Exportar el controlador
const authAndUserController = require("../../controllers/authAndUserController");

// Sign in
router.post("/signin", authAndUserController.signUp);

router.post("/login", authAndUserController.logIn);

module.exports = router;
