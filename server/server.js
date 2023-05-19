const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());
const mongoose = require("mongoose");
const bp = require("body-parser");
app.use(bp.json());

// importing my data model

mongoose.connect(process.env.DATABASE_URL);

app.get("/", function (request, response) {
  response.json("You are looking at my root route, how roude!");
});

// get endpoint that gets my data from the database

// post endpoint that creates a new item in my database

// delete endpoint that DESTROYS DATA

// put endpoint that updates my data

app.listen(PORT, () => console.log("App is listening of PORT " + PORT));
