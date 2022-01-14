const mongoose = require("mongoose");
const cors = require("cors");
var app = require('express')();
const bodyParser = require("body-parser");
app.use(
  cors({
    origin: "*",
  })
);
// const http = require("http");
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const router = require("./router")
// const { Server } = require("socket.io");
// const io = new Server(server);
// const app = require("express")();
// const server = require("http").createServer(app);
// var io = require("socket.io")(server)
// const uuid = require("uuid");
// const helmet = require('helmet') // Security and HTTP header middleware
// const cors = require('cors') // Handling CORS for accessible APIs
// const morgan = require('morgan') // Request logging
// const compression = require('compression') // GZIP middleware for compressing responses
// require('dotenv').config()
//
//   {
//   "origin": "*",
//   "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
//   "preflightContinue": false,
//   "optionsSuccessStatus": 204
//   }
// )
// App
MONGO_URI:mongodb+srv://yugidraft:yugidraft@cluster0.byyce.mongodb.net/yugidraft
// Database connection
const DB_URI = process.env.MONGO_URI;
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on("error", (err) => {
  console.error(err);
});
db.once("open", () => {
  console.log("Connected to DB");
});

app.use("/", router);

var rooms = { roomId: "3zauu" };

app.use(bodyParser.json());
var MAX_PLAYERS = 8


http.listen(3001, function () {
  console.log(`listening on port 3001`);
});

module.exports.rooms = rooms;
