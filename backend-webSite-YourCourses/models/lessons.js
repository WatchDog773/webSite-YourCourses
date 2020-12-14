// Importamos el archivo de la base de datos
const { RequestTimeout } = require("http-errors");
const mongoDB = require("../config/db");

// Importamos el objectId
const objectId = require("mongodb").ObjectID;

class lessons {
  constructor() {
    this.collection = null;
    mongoDB
      .getDb()
      .then(async (db) => {
        this.collection = await db.collection("lessons");
        /*         if (process.env.ENSURE_INDEX == "1") {
          await this.collection.createIndex({ email: 1 }, { unique: true });
        } */
      })
      .catch((error) => {
        throw error;
      });
  }

  async getAllLessons() {
    try {
      const result = await this.collection.find({}).toArray();
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getAllCoursesCourse(id) {
    try {
      console.log(id);
      const courseId = new objectId(id);
      const result = await this.collection.find({ courseId }).toArray();
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getOneLesson(id) {
    try {
      const _id = new objectId(id);
      const result = await this.collection.findOne({ _id });
      return result;
    } catch (error) {
      throw error;
    }
  }

  async addLesson(data) {
    try {
      let { id, name, description, video } = data;
      console.log(id);
      const courseId = new objectId(id);
      const dat = {
        courseId,
        name,
        description,
        video,
      };
      await this.collection.insertOne(dat);
      //return result;
    } catch (error) {
      throw error;
    }
  }

  async updateLessonById(lessonId, data) {
    try {
      const _id = new objectId(lessonId);
      const docOptions = { $set: data };
      await this.collection.updateOne({ _id }, docOptions, {
        returnOriginal: false,
      });
      //return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = lessons;
