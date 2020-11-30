// Importamos express
const express = require("express");
const router = express.Router();

// Importamos el controlador
const authAndUserController = require("../controllers/authAndUserController");

// Le decimos a la app que use:
router.use("/auth", authAndUserController);

module.exports = router;
