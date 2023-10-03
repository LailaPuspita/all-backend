// mengeksport module
// const { pool } = require("../db/database");
const doctorService = require("../services/doctor-services");
// const { doctorRoute } = require("../routes/doctor-routes");

// // menggunakan async funtion
// async function getAllDoctor(req, res) {
//   const connection = await pool.getConnection();

//   const [rows] = await connection.query("SELECT * FROM doctor");
//   console.log(rows);

//   res.status(200).json({
//     message: "Hello Laila!",
//     data: rows,
//   });
// }

// menggunakan arrow function
const getAllDoctor = async (req, res) => {
  try {
    const doctors = await doctorService.getAllDoctor();
    res.status(200).json({
      message: "Success in retrieving data!",
      data: doctors,
    });
  } catch (error) {
    console.error("Error fetching data: " + error);
    res.status(500).json({
      message: "Error fetching data",
    });
  }
};

module.exports = { getAllDoctor };
