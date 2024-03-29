const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())

app.use(express.json())

const PORT = 3333;
app.listen(PORT, function(){
    console.log(`Server is running on Port ${PORT}`)
});