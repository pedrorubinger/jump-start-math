const Attempt = require("../models/Attempt");
const Question = require("../models/Question");
const User = require("../schemas/User");

class AttemptController {
  async store(req, res) {
    const user = await User.findById(req.userId);

    const { id, tempoTentativa } = await Attempt.create({
      userId: req.body.userId,
      userName: req.body.userName,
      classId: user.classroom,
      question1Id: req.body.question1Id,
      question2Id: req.body.question2Id,
      question3Id: req.body.question3Id,
      tempoTentativa: req.body.tempoTentativa,
    });

    return res.json({ id, tempoTentativa });
  }

  async index(req, res) {
    const attempts = await Attempt.findAll({
      where: { classId: req.params.class },
      attributes: ["id", "userId", "userName", "tempoTentativa"],
      include: [
        {
          model: Question,
          as: "question1",
          attributes: [
            "enunciado",
            "resposta",
            "respostaEsperada",
            "acerto",
            "tempoGasto",
          ],
        },
        {
          model: Question,
          as: "question2",
          attributes: [
            "enunciado",
            "resposta",
            "respostaEsperada",
            "acerto",
            "tempoGasto",
          ],
        },
        {
          model: Question,
          as: "question3",
          attributes: [
            "enunciado",
            "resposta",
            "respostaEsperada",
            "acerto",
            "tempoGasto",
          ],
        },
      ],
    });

    return res.json(attempts);
  }
}

module.exports = new AttemptController();
