// Hacemos referencia a la clase
const authAndUserModel = require("../models/authAndUser");
const modelAuthAndUser = new authAndUserModel();

// Exportar la configuración de seguridad
const securityConfig = require("../config/security");
const passport = require("passport");

exports.signUp = async (req, res, next) => {
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
      await modelAuthAndUser.addUser({ email, password });
      res.status(201).json({ mensaje: "Registrado con exito" });
    }
  } catch (error) {
    if (error.toString().match(/MongoError: E11000.*/)) {
      // Busca si ese ese error sobre el correo.
      //console.log("YA EXISTE ESE CORREO");
      res.status(500).json({ mensaje: "Ese correo ya esta registrado" });
    } else {
      console.log(error);
      res
        .status(500)
        .json({ mensaje: "Algo salio mal, contacte con el administrador" });
    }
  }
};

exports.logIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      // Si el correo viene vacio
      res.status(400).json({ mensaje: "Debe ingresar un correo electrónico" });
    } else if (!password) {
      // Si la contraseña viene vacia
      res.status(400).json({ mensaje: "Debe ingresar una contraseña" });
    } else {
      const _idUser = await modelAuthAndUser.comparePassword(email, password);
      if (_idUser == null) {
        // Si devuelve null
        //res.send(`Viene vacio: ${user}`);
        res.status(404).json({ mensaje: "El usuario no existe" });
      } else if (_idUser == false) {
        // Si devuelve falso
        //res.send(`Viene falso: ${user}`);
        res.status(403).json({ mensaje: "Correo y/o contraseña incorrecto/a" });
      } else {
        // Si devuelve verdadero
        //res.send(`Viene verdadero: ${user}`);
        const token = await securityConfig.getToken({ _id: _idUser, email });
        res.status(200).json({
          mensaje: "Bienvenido/a",
          user: { _id: _idUser, email },
          token,
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

exports.test = async (req, res, next) => {
  res.send(`_id User: ${req.user._id}`);
};
