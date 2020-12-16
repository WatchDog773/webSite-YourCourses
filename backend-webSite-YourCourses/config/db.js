// Cliente de mongodb
const MongoClient = require("mongodb").MongoClient;

let db = null;

module.exports = class MongoDataModel {
  static async getDb() {
    if (!db) {
      try {
        const connection = await MongoClient.connect(process.env.MONGO_URI, {
          useUnifiedTopology: true,
        });
        db = connection.db(process.env.MONGO_DB);
        return db;
      } catch (error) {
        console.log(error);
        throw error;
      }
    } else {
      return db;
    }
  }
};
