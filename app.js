// const Joi = require("joi");
// const shortid = require("shortid");
// // const passwordSchema = Joi.string().min(3).max(10).alphanum();

// // console.log(passwordSchema.validate("q"));

// console.log(shortid.generate());

const express = require("express");

const app = express();

app.use("*", (req, res) => {
  console.log("It was query from browser");
  res.send("<h1>This is response HTML from server</h1>");
});

const listener = app.listen(4444, () => {
  console.log(`Web-server was run at the port ${listener.address().port}`);
});
