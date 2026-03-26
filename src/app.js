const express = require("express")
const cors = require("cors")
const app = express()
const candidateRoutes = require("./routes/candidateRoutes")
const errorHandler = require("./middlewares/errorHandler")

app.use(express.json())
app.use(cors())

// 👇 ROTA DE MONITORAMENTO (ADICIONA ISSO)
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" })
})

app.use("/api", candidateRoutes)

app.use(errorHandler)

module.exports = app
