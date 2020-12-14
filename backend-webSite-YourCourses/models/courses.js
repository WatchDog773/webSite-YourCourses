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
      console.log(cursoId);
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
      const docOperations = {
        $set: {
          "lessons.$.name": name,
          "lessons.$.description": description,
          "lessons.$.video": video,
        },
      };
      await this.collection.updateOne({ _id, "lessons.id": id }, docOperations);
    } catch (error) {
      throw error;
    }
  }

  async subscribe(idCourse, idUser) {
    try {
      console.log(idCourse, idUser);
      const inscriptioId = new objectId(idCourse);
      const _id = new objectId(idUser);
      const docOperations = { $push: { inscriptions: inscriptioId } };
      const reesult = await this.collection.findOneAndUpdate(
        { _id },
        docOperations,
        {
          returnOriginal: false,
        }
      );
      return reesult;
    } catch (error) {
      throw error;
    }
  }

  async findSubscribe(idUser) {
    try {
      console.log(idUser);
      const _id = new objectId(idUser);
      const reesult = await this.collection
        .find({ inscription: _id })
        .toArray();
      return reesult;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = courses;
