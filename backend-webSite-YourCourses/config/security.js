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
const expirationTime = 60 * 3; // Es en segundos

exports.getToken = (user) => {
  /*   console.log(
    `email: ${email}, secret: ${process.env.SECRETKEY}, expiracion: ${expirationTime}`
  ); */
  return jWT.sign(user, process.env.SECRETKEY, { expiresIn: expirationTime });
};

const opts = {};
opts.jwtFromRequest = extractJWT.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRETKEY;

exports.jwtPassport = passport.use(
  new jWTStrategy(opts, (jwt_payload, done) => {
    //console.log(`JWT payload: ${jwt_payload._id}`);
    let userExtract = modelAuthAndUser.getUserByEmail({
      email: jwt_payload.email,
    });
    if (userExtract) {
      return done(null, userExtract);
    }
  })
);

exports.verifyUser = passport.authenticate("jwt", { session: false });
