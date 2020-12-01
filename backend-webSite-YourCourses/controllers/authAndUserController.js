// Hacemos referencia a la clase
const authAndUserModel = require("../models/authAndUser");
const modelAuthAndUser = new authAndUserModel();

// Exportar la configuración de seguridad
const securityConfig = require("../config/security");

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
      const result = await modelAuthAndUser.addUser({ email, password });
      res.status(200).json(result);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: "algo salio mal" });
  }
};

exports.logIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      res.status(400).json({ mensaje: "Debe ingresar un correo electrónico" });
    } else if (!password) {
      res.status(400).json({ mensaje: "Debe ingresar una contraseña" });
    } else {
      const credentials = await modelAuthAndUser
        .comparePassword(email, password)
        .then((result) => {
          if (result) {
            //console.log("verdadero");
            //console.log("lego al controlador");
            const { _id } = result;
            let token = securityConfig.getToken({
              email,
              _id,
            });

            res.status(200).json({ token, user: { email, _id } });
          } else if (false == result) {
            res
              .status(401)
              .json({ mensaje: "Correo y/o contraseña incorrectos" });
          } else {
            res.status(401).json({ mensaje: "Este correo no esta registrado" });
          }
          return result;
        })
        .catch((error) => {
          console.log(error);
        });
    }

    //res.send(credentials);
  } catch (error) {
    console.log(error);
  }
};
