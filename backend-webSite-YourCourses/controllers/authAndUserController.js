// Hacemos referencia a la clase
const authAndUserModel = require("../models/authAndUser");
const modelAuthAndUser = new authAndUserModel();

// Exportar la configuración de seguridad
const securityConfig = require("../config/security");
//const passport = require("passport");

exports.signUp = async (req, res, next) => {
  try {
    const message = [];
    const { email, password, passwordVerify } = req.body;

    if (!email) {
      message.push({ message: "Debe tener un correo electrónico" });
    }
    if (!password) {
      message.push({ message: "Debe tener una contraseña" });
    }
    if (!passwordVerify) {
      message.push({ message: "Debe confirmar la contraseña" });
    }
    if (password != passwordVerify && passwordVerify != null) {
      message.push({ message: "Las contraseñas no coinciden" });
    }

    if (message.length) {
      res.status(400).json(message);
    } else {
      await modelAuthAndUser.addUser({
        email,
        password,
        stateAccount: "Active",
      });
      res.status(201).json({ message: "Registrado con exito" });
    }
  } catch (error) {
    if (error.toString().match(/MongoError: E11000.*/)) {
      // Busca si ese ese error sobre el correo.
      //console.log("YA EXISTE ESE CORREO");
      res.status(500).json({ message: "Ese correo ya esta registrado" });
    } else {
      console.log(error);
      res
        .status(500)
        .json({ message: "Algo salio mal, contacte con el administrador" });
    }
  }
};

exports.logIn = async (req, res, next) => {
  try {
    const message = [];
    const { email, password } = req.body;

    if (!email) {
      // Si el correo viene vacio
      message.push({ message: "Debe ingresar un correo electrónico" });
    }
    if (!password) {
      // Si la contraseña viene vacia
      message.push({ message: "Debe ingresar una contraseña" });
    }

    if (message.length) {
      res.status(400).json(message);
    } else {
      const _idUser = await modelAuthAndUser.comparePassword(email, password);
      if (_idUser == null) {
        // Si devuelve null
        //res.send(`Viene vacio: ${user}`);
        message.push({ message: "El usuario no existe" });
      }
      if (_idUser == false) {
        // Si devuelve falso
        message.push({ message: "Correo y/o contraseña incorrecto/a" });
      }

      if (message.length) {
        res.status(403).json(message);
      } else {
        // Si devuelve verdadero
        const token = await securityConfig.getToken({ _id: _idUser, email });
        res.status(200).json({
          message: "Bienvenido/a",
          user: { _id: _idUser, email },
          jwt: token,
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
