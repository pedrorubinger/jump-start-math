const ContactServices = require('../services/ContactServices');

module.exports = {
  async store(request, response) {
    /** TO DO: Implement validator... */
    const sent = await ContactServices.sendEmail(request.body);

    if (sent) {
      return response
        .status(200)
        .json({
          message: 'Um email foi enviado para nossa equipe!',
        });
    }

    return response
      .status(500)
      .json({
        message: 'Não foi possível enviar o email para nossa equipe!',
      });
  }
};
