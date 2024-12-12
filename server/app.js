const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const indexRouter = require("./routes/index");
const morgan = require("morgan");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api/v1", indexRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});
