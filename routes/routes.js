const express = require("express")
const Movies = require("../models/movies")
const get = require("../controller/get")
const getAllMovies = require("../controller/getAllMovies")
const searchFilter = require("../controller/searchFilter")

const router = new express.Router();


router.get("/",get)

router.get("/getAll", getAllMovies);

router.get("/searchFilter", searchFilter);
module.exports = router;