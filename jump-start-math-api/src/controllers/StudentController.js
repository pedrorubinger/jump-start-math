const User = require("../schemas/User");

class StudentController {
  async update(req, res) {
    try {
      const updatedUser = await User.findById(req.userId);

      if (updatedUser == null || updatedUser.teacher == true) {
        return res.status(400).json({ error: "Invalid User" });
      }

      if (req.body.classroom) {
        updatedUser.classroom = req.body.classroom;
      }

      await updatedUser.save();

      return res.json(updatedUser);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  async index(req, res) {
    const user = await User.findById(req.userId);

    if (user.classroom == null) {
      return res.json({ hasClassroom: false });
    } else {
      return res.json({ hasClassroom: true });
    }
  }
}

module.exports = new StudentController();
