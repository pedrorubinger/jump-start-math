const User = require('../schemas/User');

class UserController {
  async store(req, res) {

    const userExists = await User.find({
      email: req.body.email,
    });

    if (userExists) {
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

    if (req.body.question != user.question || req.body.answer != user.answer) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const updatedUser = await User.findOneAndUpdate(
      {email: req.body.email},
      {
        password: req.body.password
      },
      {
        classroom: req.body.classroom
      },
    );

    return res.json(updatedUser);


  }
}

module.exports = new UserController();