const express = require("express");
const cors = require("cors");
const UserRoutes = require('./routes/UserRoutes')

const app = express();

// Config JSON response
app.use(express.json());

//Solve CORS
app.use(cors({ credentials: true, origin: "http://localhost:3333" }));

// Public folder for images
app.use(express.static("public"));

// Routes
app.use('/users', UserRoutes)

const PORT = 3333;
app.listen(PORT, function () {
  console.log(`Server is running on Port ${PORT}`);
});



// TESTES ABAIXO

// const controler = require("./controllers/ExerciseController");
// let a = controler.create();
let b = 'b'
