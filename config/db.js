// mengkonfigurasi ke mysql2
const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  // mengkoneksikan dengan didefinisikan satu persatu
  // host: process.env.DB_HOST || "localhost",
  // user: process.env.DB_USER || "root",
  // password: process.env.DB_PASS || "",
  // database: process.env.DB_NAME || "tnt_app",

  //  atau bisa mengkoneksikannya dengan DB_URI
  //   DB_URI=mysql://root:@localhost:3306/tnt_app
  uri: process.env.DB_URI,
});

module.exports = { pool };
