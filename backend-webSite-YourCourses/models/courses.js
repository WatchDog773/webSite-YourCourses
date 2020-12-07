// Importamos el archivo de la base de datos
const { RequestTimeout } = require("http-errors");
const mongoDB = require("../config/db");

// Importamos el objectId
const objectId = require("mongodb").ObjectID;

class courses {
  constructor() {
    this.collection = null;
    mongoDB
      .getDb()
      .then(async (db) => {
        this.collection = await db.collection("courses");
        /*         if (process.env.ENSURE_INDEX == "1") {
          await this.collection.createIndex({ email: 1 }, { unique: true });
        } */
      })
      .catch((error) => {
        throw error;
      });
  }

  async getAllCourses() {
    try {
      const result = await this.collection.find({}).toArray();
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getAllCoursesByAuthor(author) {
    try {
      const result = await this.collection.find({ author }).toArray();
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getOneCourse(id) {
    try {
      const _id = new objectId(id);
      const result = await this.collection.findOne({ _id });
      return result;
    } catch (error) {
      throw error;
    }
  }

  async addCourse(data) {
    try {
      //const { _id, nombre, precio } = data;
      await this.collection.insertOne(data);
      //return result;
    } catch (error) {
      throw error;
    }
  }

  async updateCourseById(courseId, data) {
    try {
      const _id = new objectId(courseId);
      const docOptions = { $set: data };
      await this.collection.updateOne({ _id }, docOptions, {
        returnOriginal: false,
      });
      //return result;
    } catch (error) {
      throw error;
    }
  }

  async addLesson(courseId, name, description, video) {
    try {
      const _id = new objectId(courseId);
      const lesson = {
        id: objectId(),
        name,
        description,
        video,
      };
      const docOperations = { $push: { lessons: lesson } };
      await this.collection.updateOne({ _id }, docOperations, {
        returnOriginal: false,
      });
    } catch (error) {
      throw error;
    }
  }

  async getAllLessonsByCourse(cursoId) {
    try {
      const _id = objectId(cursoId);
      const result = await this.collection.findOne({ _id });
      return result.lessons;
    } catch (error) {
      throw error;
    }
  }

  async getOneLessonByCourse(cursoId, lessonId) {
    try {
      const _id = objectId(cursoId);
      const result = await this.collection
        .findOne({ _id })
        .then((doc) => {
          for (const i in doc.lessons) {
            //console.log(doc.lessons[i]);
            if (doc.lessons[i].id == lessonId) {
              //console.log(doc.lessons[i]);
              return doc.lessons[i];
            }
          }
        })
        .catch((error) => {
          throw error;
        });

      return result;
    } catch (error) {
      throw error;
    }
  }

  async updateOneLessonByCourse(cursoId, lessonId, name, description, video) {
    try {
      const _id = objectId(cursoId);
      const id = objectId(lessonId);

      // https://docs.mongodb.com/manual/reference/operator/update/positional/
      const docOperations = {
        $set: {
          "lessons.$.name": name,
          "lessons.$.description": description,
          "lessons.$.video": video,
        },
      };
      const result = await this.collection.updateOne(
        { _id, "lessons.id": id },
        docOperations,
        {
          returnOriginal: false,
        }
      );
      //console.log(result.result.nModified);
      if (!result.result.nModified) {
        return { message: "No se realizo ningún cambio" };
      } else {
        return { message: "Se actualizo con éxito la lección" };
      }
    } catch (error) {
      throw error;
    }
  }

  async deleteOneLessonByCourse(cursoId, lessonId) {
    try {
      const _id = objectId(cursoId);
      const id = objectId(lessonId);

      // https://docs.mongodb.com/manual/reference/operator/update/pull/
      const docOperations = { $pull: { lessons: { id } } };
      const result = await this.collection.updateOne({ _id }, docOperations, {
        returnOriginal: false,
      });
      if (!result.result.nModified) {
        return { message: "No se realizo ninguna eliminacion" };
      } else {
        return { message: "Se elimino con éxito la lección" };
      }
    } catch (error) {
      throw error;
    }
  }
}

module.exports = courses;
