const { Sequelize, Model } = require('sequelize');

class Attempt extends Model {
  static init(sequelize) {
    super.init(
      {
        userId: Sequelize.STRING,
        classId: Sequelize.STRING,
        userName: Sequelize.STRING,
        tempoTentativa: Sequelize.DECIMAL(10,2),
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Question, { foreignKey: 'question1Id', as: 'question1', unique: true });
    this.belongsTo(models.Question, { foreignKey: 'question2Id', as: 'question2', unique: true });
    this.belongsTo(models.Question, { foreignKey: 'question3Id', as: 'question3', unique: true });
  }
}

module.exports = Attempt;