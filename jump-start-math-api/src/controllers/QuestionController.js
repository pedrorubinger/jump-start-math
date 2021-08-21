const Question = require ('../models/Question');

class QuestionController {
  async store(req, res) {
    const {id,respostaEsperada, enunciado, acerto, tempoGasto} = await Question.create(req.body);

    return res.json({id, enunciado, respostaEsperada, acerto, tempoGasto});
  }
}

module.exports = new QuestionController();