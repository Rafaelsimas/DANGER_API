const express = require("express")
const connectDB = require("../src/config/db")
const candidateRoutes = require("../src/routes/candidateRoutes")

const app = express()

app.use(express.json())

// conecta banco
app.use(async (req, res, next) => {
  await connectDB()
  next()
})

// rota principal
app.use("/", candidateRoutes)

module.exports = app
