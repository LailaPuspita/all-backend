// mengeksport module
// const { pool } = require("../db/database");
const appointmentService = require("../services/appointment-services");
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
const getAllAppointment = async (req, res) => {
  try {
    const appointments = await appointmentService.getAllAppointment();
    res.status(200).json({
      message: "Success in retrieving data!",
      data: appointments,
    });
  } catch (error) {
    console.error("Error fetching data: " + error);
    res.status(500).json({
      message: "Error fetching data",
    });
  }
};

const createAppointment = async (req, res) => {
  try {
    const appointment = req.body;
    const createdAppointment = await appointmentService.createAppointment(
      appointment
    );
    res.status(201).json({
      message: "appointment created",
      data: createdAppointment,
    });
  } catch (error) {
    console.error("Error fetching data: " + error);
    res.status(500).json({
      message: "Error fetching data",
    });
  }
};

module.exports = { getAllAppointment, createAppointment };
