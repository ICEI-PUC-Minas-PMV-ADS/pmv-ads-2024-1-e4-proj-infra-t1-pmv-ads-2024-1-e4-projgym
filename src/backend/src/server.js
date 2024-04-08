const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());

// DB Connection
const conn = require("./database/conn.js");

conn();

// Routes
const routes = require("./routes/index.js");

app.use("/api", routes);

const PORT = 3333;
app.listen(PORT, function () {
  console.log(`Server is running on Port ${PORT}`);
});



// TESTES ABAIXO

// const controler = require("./controllers/UserController");
// let a = controler.deleteHist();
let b = 'b'
