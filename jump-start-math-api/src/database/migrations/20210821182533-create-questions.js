module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Questions', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      enunciado: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nivel: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      resposta: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      respostaEsperada: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      acerto: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      tempoGasto: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('Questions');
  },
};