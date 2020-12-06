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

  async getAllCoursesByUser(userId) {
    try {
      const result = await this.collection.find({ userId });
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

  async updateCourseById(cursoId, data) {
    try {
      const _id = new objectId(cursoId);
      const docOptions = { $set: data };
      const result = await this.collection.findOneAndUpdate(
        { _id },
        docOptions,
        {
          returnOriginal: false,
        }
      );
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = courses;
