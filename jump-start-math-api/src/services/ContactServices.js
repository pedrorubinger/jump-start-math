const nodemailer = require('nodemailer');

module.exports = {
  /**
   * @param {Object} data - Data with email content: name, email, school and message.
   * @returns {Boolean} - If email was sent successfully, returns true.
   * Otherwise, returns false.
   */
  async sendEmail(data) {
    const { name, email, school, message } = data;
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      secure: false,
      tls: {
        rejectUnauthorized: false
      },
      auth:{
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    const mailConfig = nodemailer.createTransport({
      from: email,
      to: process.env.EMAIL_USER,
      cc: `${name} <${email}>`,
      subject:
        `Mensagem de Contato - ${name} - ${new Date().toLocaleDateString()}`,
      html: `
        <strong>Nome:</strong> <span>${name}</span>
        <br /><strong>Email:</strong> <span>${email}</span>
        <br /><strong>Escola/Empresa:</strong> <span>${school || 'Não Informado'}</span>
        <br /><strong>Mensagem:</strong> <br /> <span>${message}</span>
      `,
    });

    try {
      await transporter.sendMail(mailConfig.options);
      return true;
    } catch (error) {
      return false;
    }
  }
}