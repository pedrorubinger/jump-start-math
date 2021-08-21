const { Sequelize, Model } = require('sequelize');

class Attempt extends Model {
  static init(sequelize) {
    super.init(
      {
        userId: Sequelize.STRING,
        tempoTentativa: Sequelize.DECIMAL(10,2),
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Attempt, { foreignKey: 'question1Id', as: 'question1' });
    this.belongsTo(models.Attempt, { foreignKey: 'question2Id', as: 'question2' });
    this.belongsTo(models.Attempt, { foreignKey: 'question3Id', as: 'question3' });
  }
}

module.exports = Attempt;