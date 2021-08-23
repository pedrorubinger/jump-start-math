const Attempt = require('../models/Attempt');
const Question = require('../models/Question');

class AttemptController {
  async store(req, res) {
    const {id,tempoTentativa} = await Attempt.create(req.body);

    return res.json({id, tempoTentativa});
  }

  async index(req, res) {
    const attempts = await Attempt.findAll({
      where: {classId: req.params.class},
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

module.exports = new AttemptController();