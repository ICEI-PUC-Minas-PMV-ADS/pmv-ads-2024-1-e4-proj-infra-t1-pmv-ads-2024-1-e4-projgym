const express = require("express");
const cors = require("cors");
const UserRoutes = require('./routes/UserRoutes')
const ExerciseRoutes = require('./routes/ExerciseRoutes')
const ExercicioGrupoRoutes = require('./routes/ExercicioGrupoRoutes')
const GrupoRoutes = require('./routes/GrupoRoutes')

const app = express();

// Config JSON response
app.use(express.json());

//Solve CORS
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

// Public folder for images
app.use(express.static("public"));

// Adicionar os cabeçalhos Access-Control-Allow-Origin
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});


// Routes
app.use('/users', UserRoutes)
app.use('/', ExerciseRoutes)
app.use('/', ExercicioGrupoRoutes)
app.use('/', GrupoRoutes)


const PORT = 3333;
app.listen(PORT, function () {
  console.log(`Server is running on Port ${PORT}`);
});



// TESTES ABAIXO

// const controler = require("./controllers/ExerciseController");
// let a = controler.create();
let b = 'b'
