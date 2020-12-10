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
      .json({ message: "Algo salio mal, contacte con el administrador" });
  }
};

exports.chargeOneCourse = async (req, res, next) => {
  try {
    const { id } = req.params;
    const oneCourse = await modelCourses.getOneCourse(id);
    res.status(200).json(oneCourse);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Algo salio mal, contacte con el administrador" });
  }
};

exports.chargeAllCoursesByAuthor = async (req, res, next) => {
  try {
    const { author } = req.params;
    const courses = await modelCourses.getAllCoursesByAuthor(author);
    res.status(200).json(courses);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Algo salio mal, contacte con el administrador" });
  }
};

exports.createCourse = async (req, res, next) => {
  try {
    const message = [];
    const { name, description, information, image, price } = req.body;
    if (!name) {
      message.push({ message: "El curso debe tener un nombre" });
    }
    if (!description) {
      message.push({ message: "El curso debe tener una descripción" });
    }
    if (!information) {
      message.push({ message: "El curso debe tener una información" });
    }
    /* if (!image) { TODO: Habilitar despues
      message.push({ message: "El curso debe tener una imagen de portada" });
    } */
    if (!price) {
      message.push({ message: "El curso debe tener un precio de venta" });
    }

    if (message.length) {
      res.status(400).json(message);
    } else {
      await modelCourses.addCourse({
        author: req.user.email,
        name,
        description,
        information,
        image,
        price,
        stateCourse: "Active",
      });
      res.status(200).json({ message: "Creado con éxito" });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Algo salio mal, contacte con el administrador" });
  }
};

exports.updateCourse = async (req, res, next) => {
  try {
    // Verificar si el usuario que lo actualizara es el creador del curso
    const { id } = req.params;
    const message = [];
    const oneCourse = await modelCourses.getOneCourse(id);

    if (req.user.email != oneCourse.author) {
      message.push({ message: "No tiene permisos para realizar esta acción" });
    }

    if (message.length) {
      res.status(403).json(message);
    } else {
      const { name, description, information, image, price } = req.body;

      if (!name) {
        message.push({ message: "El curso debe tener un nombre" });
      }
      if (!description) {
        message.push({ message: "El curso debe tener una descripción" });
      }
      if (!information) {
        message.push({ message: "El curso debe tener una información" });
      }
      /* if (!image) { TODO: Habilitar después
        message.push({ message: "El curso debe tener una imagen de portada" });
      } */
      if (!price) {
        message.push({ message: "El curso debe tener un precio de venta" });
      }

      if (message.length) {
        res.status(400).json(message);
      } else {
        await modelCourses.updateCourseById(id, {
          name,
          description,
          information,
          price,
        });
        res
          .status(200)
          .json({ message: "Se actualizo correctamente tu curso" });
      }
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Algo salio mal, contacte con el administrador" });
  }
};

exports.addLesson = async (req, res, next) => {
  try {
    const message = [];
    const { id } = req.params;
    const { name, description, video } = req.body;

    const oneCourse = await modelCourses.getOneCourse(id);

    if (req.user.email != oneCourse.author) {
      message.push({ message: "No tiene permisos para realizar esta acción" });
    }

    if (message.length) {
      res.status(403).json(message);
    } else {
      if (!name) {
        message.push({ message: "La lección debe tener un nombre" });
      }
      if (!description) {
        message.push({ message: "La lección debe tener una descripción" });
      }
      /*       if (!video) {
        message.push({ message: "La lección debe tener un video" });
      } */

      if (message.length) {
        res.status(400).json(message);
      } else {
        await modelCourses.addLesson(id, name, description, video);
        res
          .status(200)
          .json({ message: "Se agrego una lección correctamente a tu curso" });
      }
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Algo salio mal, contacte con el administrador" });
  }
};

exports.updateLesson = async (req, res, next) => {
  try {
    const message = [];
    const { id, lessonId } = req.params;
    const { name, description, video } = req.body;
    const oneCourse = await modelCourses.getOneCourse(id);

    if (req.user.email != oneCourse.author) {
      message.push({ message: "No tiene permisos para realizar esta acción" });
    }

    if (message.length) {
      res.status(403).json(message);
    } else {
      await modelCourses.updateOneLessonByCourse(
        id,
        lessonId,
        name,
        description,
        video
      );
      res.status(200).json({ message: "Se actualizo con éxito la lección" });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Algo salio mal, contacte con el administrador" });
  }
};
