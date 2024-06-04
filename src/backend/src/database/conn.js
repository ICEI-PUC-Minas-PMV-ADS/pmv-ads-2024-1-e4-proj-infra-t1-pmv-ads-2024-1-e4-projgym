const mongoose = require("mongoose");
require("dotenv").config();

async function connectDB() {

  //const dbUser = process.env.DB_USER;
  //const dbPassword = process.env.DB_PASS;

  await mongoose.connect(
    "mongodb+srv://gymgoteam:oG5UJKUnWCpKf4Wa@cluster0.hhjfolf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    // `mongodb+srv://${dbUser}:${dbPassword}@cluster0.hhjfolf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  );

  console.log('Conectado ao banco!')
}

connectDB().catch((error) => console.log(error))

module.exports = mongoose;
