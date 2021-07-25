const jwt = require('jsonwebtoken');
const User = require('../schemas/User');

const authConfig = require('../config/auth');

class SessionController {
  async store(req,res ) {
    const {email, password} = req.body;

    const user = await User.find({
      email,
    })

    if (user.length == 0) {
      return res.status(400).json({ error: 'User not found' });
    }

    if (!(await user[0].comparePassword(password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name, teacher } = user[0];

    return res.json({
      user: {
        id,
        name,
        email,
        teacher,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

module.exports = new SessionController();