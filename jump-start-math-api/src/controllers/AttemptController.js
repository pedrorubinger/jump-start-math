const Attempt = require('../models/Attempt');

class AttemptController {
  async store(req, res) {
    const {id,tempoTentativa} = await Attempt.create(req.body);

    return res.json({id, tempoTentativa});
  }
}

module.exports = new AttemptController();