// mengeksport module
// const { pool } = require("../db/database");
const memberService = require("../services/member-services");
// const { memberRoute } = require("../routes/member-routes");

// // menggunakan async funtion
// async function getAllMember(req, res) {
//   const connection = await pool.getConnection();

//   const [rows] = await connection.query("SELECT * FROM member");
//   console.log(rows);

//   res.status(200).json({
//     message: "Hello Laila!",
//     data: rows,
//   });
// }

// menggunakan arrow function
const getAllMember = async (req, res) => {
  try {
    const members = await memberService.getAllMember();
    res.status(200).json({
      message: "Success in retrieving data!",
      data: members,
    });
  } catch (error) {
    console.error("Error fetching data: " + error);
    res.status(500).json({
      message: "Error fetching data",
    });
  }
};

module.exports = { getAllMember };
