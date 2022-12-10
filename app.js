const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const companyRouter = require("./routes/company");
const staffRouter = require("./routes/staff");

const app = express();

mongoose.connect(
  `mongodb+srv://phuritd:${process.env.PASSWORD}@1913110027-phu.rqjup1a.mongodb.net/restfulapi?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/company", companyRouter);
app.use("/staff", staffRouter);

module.exports = app;
