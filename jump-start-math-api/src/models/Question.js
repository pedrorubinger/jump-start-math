const { Sequelize, Model } = require('sequelize');

class Question extends Model {
  static init(sequelize) {
    super.init(
      {
        enunciado: Sequelize.STRING,
        nivel: Sequelize.INTEGER,
        resposta: Sequelize.STRING,
        respostaEsperada: Sequelize.STRING,
        acerto: Sequelize.BOOLEAN,
        tempoGasto: Sequelize.DECIMAL(10,2),
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

module.exports = Question;