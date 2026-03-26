const express = require("express")
const cors = require("cors")
const app = express()
const candidateRoutes = require("./routes/candidateRoutes")
const errorHandler = require("./middlewares/errorHandler")

app.use(express.json())
app.use(cors())

app.use("/api", candidateRoutes)

app.use(errorHandler)

module.exports = app
