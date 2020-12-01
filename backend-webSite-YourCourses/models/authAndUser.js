// Importamos el archivo de la base de datos
const mongoDB = require("../config/db");

// Importamos el objectId
const objectId = require("mongodb").ObjectID;

// Importamos bcrypt (linux y mac) / bcrypt (windows)
const bcrypt = require("bcrypt");

const { json } = require("express");
const { use } = require("passport");

class authAndUser {
  constructor() {
    this.collection = null;
    mongoDB
      .getDb()
      .then(async (db) => {
        this.collection = await db.collection("users");
        if (process.env.ENSURE_INDEX == "1") {
          await this.collection.createIndex({ email: 1 }, { unique: true });
        }
      })
      .catch((error) => {
        throw error;
      });
  }

  async addUser(data) {
    const { email, password } = data;
    try {
      const add = {
        email: email,
        password: bcrypt.hashSync(password, 13),
        lastlogin: 0,
        lastpwdchg: 0,
        pwdexp: new Date().getTime() + 1000 * 60 * 10, // 10 minutos
        oldpwd: [],
        //roles: ["public"], TODO: No creo ocupar roles ahorita
      };
      const result = await this.collection.insertOne(add);
      return result;
    } catch (error) {
      throw error;
    }
  }

  /*   async getUserByEmail(email) {
    try {
      const filter = { email };
      let user = await this.collection.findOne(filter);
      return user;
    } catch (error) {
      throw error;
    }
  } */

  async comparePassword(email, rawPassword) {
    const user = await this.collection
      .findOne({ email })
      .then((result) => {
        //console.log("Devolvio e1: \n", result);
        // return result;
        if (!result) {
          return result;
        } else {
          //console.log("paso al ese");
          const data = bcrypt.compareSync(rawPassword, result.password);
          //console.log("paso el compare");
          if (!data) {
            return data;
          } else {
            //console.log("llego al result");
            return result;
          }
        }
      })
      .catch((error) => {
        console.log("Hubo un error e2:\n", error);
        return error;
      });

    return user;
  }
}

module.exports = authAndUser;
