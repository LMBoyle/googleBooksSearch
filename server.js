// Dependencies ===================================================================================

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

// Express ========================================================================================

const app = express();
const PORT = process.env.PORT || 1745;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Routes =========================================================================================

// Use ./routes
app.use(routes);

// Database =======================================================================================

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");


// Listen =========================================================================================

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
