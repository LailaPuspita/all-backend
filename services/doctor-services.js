// menggunakan db biasa
// const { pool } = require("../config/db");

// const getAllDoctor = async () => {
//   const connection = await pool.getConnection();

//   const [doctor] = await connection.query("SELECT * FROM doctor");
//   return doctor;
// };

// menggunakan prisma

const { prisma } = require("../config/prisma");
const getAllDoctor = async () => {
  try {
    const doctors = await prisma.doctor.findMany();
    return doctors;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllDoctor };
