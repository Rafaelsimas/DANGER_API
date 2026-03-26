const Candidate = require("../models/Candidate")

exports.createCandidate = async (req, res, next) => {
  try {
    const { fullName, artisticName, address, tel, age } = req.body

    if (!fullName || !artisticName || !address || !tel || !age) {
      return res.status(400).json({ message: "Preencha todos os campos" })
    }

    const existingCandidate = await Candidate.findOne({ tel })

    if (existingCandidate) {
      return res
        .status(400)
        .json({ message: "Candidato já cadastrado com este telefone" })
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
    next(error)
  }
}
