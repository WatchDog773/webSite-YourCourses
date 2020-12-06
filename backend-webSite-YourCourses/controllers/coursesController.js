// Hacemos referencia a la clase
const coursesModel = require("../models/courses");
const modelCourses = new coursesModel();

exports.chargeAllCourses = async (req, res, next) => {
  try {
    const allCourses = await modelCourses.getAllCourses();
    res.status(200).json(allCourses);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ mensaje: "Algo salio mal, contacte con el administrador" });
  }
};

exports.createCourse = async (req, res, next) => {
  try {
    const { nombre, precio } = req.body;
    const result = await modelCourses.addCourse({
      userId: req.user._id,
      nombre,
      precio,
    });
    res.status(200).json({ mensaje: "Creado con exito" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ mensaje: "Algo salio mal, contacte con el administrador" });
  }
};
