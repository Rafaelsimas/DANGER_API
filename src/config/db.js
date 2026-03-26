const mongoose = require("mongoose")

let isConnected = false

const connectDB = async () => {
  if (isConnected) return

  try {
    const db = await mongoose.connect(process.env.MONGO_URI)
    isConnected = db.connections[0].readyState
    console.log("🔥 MongoDB conectado (Vercel)")
  } catch (error) {
    console.error("❌ ERRO MONGO:", error)
    throw error
  }
}

module.exports = connectDB
