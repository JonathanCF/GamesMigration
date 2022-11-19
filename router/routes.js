const express = require("express");
const router = express.Router();
const GamesController = require("../controllers/GamesController");

router.post("/", GamesController.create);

router.get("/", GamesController.index);

router.get("/games/lista", GamesController.lista);

router.post("/games/lista/delete/:id", GamesController.delete);

router.get("/games/editar/:id", GamesController.editar);

router.post("/update", GamesController.update);



module.exports = router