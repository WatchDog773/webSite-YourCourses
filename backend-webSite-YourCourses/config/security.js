// Importar passport
const passport = require("passport");

// Importar el modelo
const authAndUserModel = require("../models/authAndUser");
const modelAuthAndUser = new authAndUserModel();

// Importar Estrategia JSON Web Token
const jWTStrategy = require("passport-jwt").Strategy;

// Configurar el extractor
const extractJWT = require("passport-jwt").ExtractJwt;

// Importar JSON Web Token
const jWT = require("jsonwebtoken");

// Expiracion
const expirationTime = 60 * 60 * 24 * 10; // Es en segundos (un dia de expiracion)

exports.getToken = (data) => {
  return jWT.sign(data, process.env.SECRETKEY, { expiresIn: expirationTime });
};

const opts = {};
opts.jwtFromRequest = extractJWT.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRETKEY;

exports.jwtPassport = passport.use(
  new jWTStrategy(opts, async (payload, done) => {
    await modelAuthAndUser
      .getUserByEmail(payload.email)
      .then((result) => {
        if (!result) {
          return done(null, false);
        } else {
          // TODO: Verificar si el usuario tiene un estado activo
          const user = { _id: result._id, email: result.email };
          return done(null, user);
        }
      })
      .catch((error) => {
        return done(error, false);
      });
  })
);

// Permitir que passport lea los valores del objeto usuario
// Serializar el usuario
passport.serializeUser((usuario, callback) => {
  callback(null, usuario);
});

// Deserializar el usuario
passport.deserializeUser((usuario, callback) => {
  callback(null, usuario);
});

exports.verifyUser = passport.authenticate("jwt", { session: false });
