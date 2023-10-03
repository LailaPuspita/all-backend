const express = require("express");

// karena pool sudah tidak terpakai bisa di hapus saja
// const { pool } = require("../db/database");
const doctorController = require("../controllers/doctor-controllers");

const doctorRoute = express.Router();

doctorRoute.get("/doctor", doctorController.getAllDoctor);

module.exports = { doctorRoute };
