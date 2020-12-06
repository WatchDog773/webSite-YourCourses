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
const expirationTime = 60 * 60 * 24; // Es en segundos (3 minutos de expiracion)

exports.getToken = (data) => {
  /*   console.log(
    `email: ${email}, secret: ${process.env.SECRETKEY}, expiracion: ${expirationTime}`
  ); */
  return jWT.sign(data, process.env.SECRETKEY, { expiresIn: expirationTime });
};

const opts = {};
opts.jwtFromRequest = extractJWT.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRETKEY;

// Version progrmada insegura del JWT
/* exports.jwtPassport = passport.use(
  new jWTStrategy(opts, (payload, next) => {
    const user = { _id: payload._id, email: payload.email };
    //console.log(payload);
    return next(null, user);
  })
); */

exports.jwtPassport = passport.use(
  new jWTStrategy(opts, async (payload, done) => {
    await modelAuthAndUser
      .getUserByEmail(payload.email)
      .then((result) => {
        if (!result) {
          return done(null, false);
        } else {
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
