const User = require('../schemas/User');

class StudentController {

  async update(req, res) {

    const updatedUser = await User.findById(req.userId);

    console.log(updatedUser);

    if (updatedUser == null || updatedUser.teacher == true) {
      return res.status(400).json({error: 'Invalid User'});
    }

    if (req.body.classroom) {
      updatedUser.classroom = req.body.classroom;
    }

    await updatedUser.save();

    return res.json(updatedUser);


  }
}

module.exports = new StudentController();