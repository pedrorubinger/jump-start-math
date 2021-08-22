const Attempt = require('../models/Attempt');
const Question = require('../models/Question');

class AttemptUserController {


  async index(req, res) {
    const attempts = await Attempt.findAll({
      where: {userId: req.params.user},
      attributes: ['id','userId', 'userName', 'tempoTentativa'],
      include: [
        {
          model: Question,
          as: 'question1',
          attributes: ['enunciado', 'resposta', 'respostaEsperada', 'acerto', 'tempoGasto'],
        },
        {
          model: Question,
          as: 'question2',
          attributes: ['enunciado', 'resposta', 'respostaEsperada', 'acerto', 'tempoGasto'],
        },
        {
          model: Question,
          as: 'question3',
          attributes: ['enunciado', 'resposta', 'respostaEsperada', 'acerto', 'tempoGasto'],
        },
      ],
    });

    return res.json(attempts);
  }


}

module.exports = new AttemptUserController();