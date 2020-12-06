// Importamos el archivo de la base de datos
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

  async addCourse(data) {
    try {
      //const { _id, nombre, precio } = data;
      const result = await this.collection.insertOne(data);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = courses;
