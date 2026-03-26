const Candidate = require("../models/Candidate")

exports.createCandidate = async (req, res) => {
  try {
    const { fullName, artisticName, address, tel, age } = req.body

    if (!fullName || !artisticName || !address || !tel || !age) {
      return res.status(400).json({ message: "Preencha todos os campos" })
    }

    const existing = await Candidate.findOne({ tel })

    if (existing) {
      return res.status(400).json({ message: "Candidato já cadastrado" })
    }

    const candidate = await Candidate.create({
      fullName,
      artisticName,
      address,
      tel,
      age,
    })

    return res.status(201).json({
      message: "Candidato cadastrado com sucesso",
      data: candidate,
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: "Erro interno do servidor" })
  }
}
