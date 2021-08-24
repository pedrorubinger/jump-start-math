const Question = require("../models/Question");
const resolve = require("../services/ResolveQuestions");

class QuestionController {
  async store(req, res) {
    const question = req.body;

    const resolved = {
      ...question,
      ...resolve(question.nivel, question.resposta, question.valores),
    };

    const { id, respostaEsperada, enunciado, acerto, tempoGasto } =
      await Question.create({
        enunciado: resolved.enunciado,
        nivel: resolved.nivel,
        resposta: resolved.resposta,
        respostaEsperada: resolved.respostaEsperada,
        acerto: resolved.acerto,
        tempoGasto: resolved.tempoGasto
      }).catch(err => console.log(err));

    return res.json({ id, enunciado, respostaEsperada, acerto, tempoGasto });
  }
}

module.exports = new QuestionController();
