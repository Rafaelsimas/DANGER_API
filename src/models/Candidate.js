const mongoose = require("mongoose")

const candidateSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    artisticName: { type: String, required: true },
    address: { type: String, required: true },
    tel: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
  },
  { timestamps: true },
)

module.exports =
  mongoose.models.Candidate || mongoose.model("Candidate", candidateSchema)
