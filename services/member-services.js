// dengan db schema.sql
//  const {pool} = require('../config/db);

const { prisma } = require("../config/prisma");

// const getAllMember = async () => {
//   const connection = await prisma.getConnection();

//   const [member] = await connection.query("SELECT * FROM member");
//   connection.release();
//   return member;
// };

const getAllMember = async () => {
  try {
    const members = await prisma.member.findMany();
    return members;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllMember };
