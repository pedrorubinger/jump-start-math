const User = require('../schemas/User');

class UserController {
  async store(req, res) {

    const userExists = await User.find({
      email: req.body.email,
    });

    if (userExists.length > 0) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      teacher: req.body.teacher,
      question: req.body.question,
      answer: req.body.answer,
    });

    return res.json(user);
  }

  async update(req, res) {
    const user = await User.find({
      email: req.body.email,
    });

    if (req.body.password) {
      if (req.body.question != user[0].question || req.body.answer != user[0].answer) {
        return res.status(400).json({ error: 'Validation Fails' });
      }
    }

    const updatedUser = await User.findOne(
      {email: req.body.email}
    );

    if (req.body.password) {
      updatedUser.password = req.body.password;
    }

    await updatedUser.save();

    return res.json(updatedUser);


  }
}

module.exports = new UserController();