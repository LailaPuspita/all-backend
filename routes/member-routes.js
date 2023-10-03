const express = require("express");

// karena pool sudah tidak terpakai bisa di hapus saja
// const { pool } = require("../db/database");
const memberController = require("../controllers/member-controllers");

const memberRoute = express.Router();

memberRoute.get("/member", memberController.getAllMember);

module.exports = { memberRoute };
