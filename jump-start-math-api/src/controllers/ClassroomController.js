const Classroom = require('../schemas/Classroom');

class ClassroomController {
  async index(req, res) {
    try {
      const classrooms = await Classroom.find();

      return res.status(200).json({ classrooms });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  async fetchClassroomsByTeacherId(req, res) {
    try {
      const classrooms = await Classroom.find().where('teacher_id').equals(req.params.teacher_id);

      return res.status(200).json({ classrooms });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  async store(req, res) {
    const { code, description, name, teacher_id } = req.body;

    try {
      if (!name || !code || !teacher_id) {
        return res.status(400).json({
          error: 'You must provide all required fields!',
        });
      }

      const classroomAlreadyExists = await Classroom.find({
        code: req.body.code,
      });

      if (classroomAlreadyExists?.length) {
        return res.status(400).json({ error: 'Classroom already exists!' });
      }

      const classroom = await Classroom.create({
        name,
        code,
        description,
        is_active: true,
        teacher_id,
      });

      return res.status(201).json(classroom);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  async archive(req, res) {
    try {
      const classroom = await Classroom.find({
        code: req.params.code,
      });

      if (!classroom) {
        return res.status(404).json({ error: 'Classroom not found!' });
      }

      await Classroom.findOneAndUpdate(
        { code: req.params.code },
        { is_active: req.body.is_active },
      );

      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
}

module.exports = new ClassroomController();
