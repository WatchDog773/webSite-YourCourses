// Importamos express
const express = require("express");
const router = express.Router();

// Importamos passport
const passport = require("passport");

// Hacemos referencia a la clase
const authAndUserModel = require("../models/authAndUser");
const modelAuthAndUser = new authAndUserModel();

// Exportar la configuración de seguridad
const securityConfig = require("../config/security");

// Sign in
router.post("/signin", async (req, res, next) => {
  try {
    const { email, password, passwordVerify } = req.body;
    if (!email) {
      res.status(400).json({ mensaje: "Debe tener un correo electrónico" });
    } else if (!password) {
      res.status(400).json({ mensaje: "Debe tener una contraseña" });
    } else if (!passwordVerify) {
      res.status(400).json({ mensaje: "Debe confirmar la contraseña" });
    } else if (password != passwordVerify) {
      res.status(400).json({ mensaje: "Las contraseñas no coinciden" });
    } else {
      const result = await modelAuthAndUser.addUser({ email, password });
      res.status(200).json(result);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: "algo salio mal" });
  }
});

router.post("/login", async (req, res, next) => {
  try {
    // Extraer el email del body
    const { email } = req.body;
    //console.log(email);
    // Crear el token
    let token = await securityConfig.getToken({ email });
    res.status(200).json(token);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: "algo salio mal" });
  }
});

router.get("/test", securityConfig.verifyUser, (req, res, next) => {
  res.send("Cargo");
});

module.exports = router;
