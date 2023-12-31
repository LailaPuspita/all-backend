// untuk membuat port tersembunyi di dalam file (.env)
require("dotenv").config();

////  file entry point dimana nanti server API bakal jalan
const express = require("express");

// untuk mengkoneksikan modul dengan module yang telah di buat sendiri
// const { pool } = require("./config/db");
const { logger } = require("./middleware/logger");
const { memberRoute } = require("./routes/member-routes");
const { doctorRoute } = require("./routes/doctor-routes");
const { appointmentRoute } = require("./routes/appointment-routes");

const app = express();
const cors = require("cors");
const port = process.env.PORT || 4000;

app.use(logger);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/member", memberRoute);
app.get("/doctor", doctorRoute);
app.get("/appointment", appointmentRoute);
app.post("/appointment", appointmentRoute);

// // Routes
// const apiRouter = express.Router();
// app.use("/api", apiRouter);

// // /api/users
// apiRouter.use("/member", memberRoute);
// apiRouter.use("/doctor", doctorRoute);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal server error" });
});

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
