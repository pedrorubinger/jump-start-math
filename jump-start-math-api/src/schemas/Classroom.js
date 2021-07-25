const mongoose = require('mongoose');

const ClassroomSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
    teacher_id: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Classroom', ClassroomSchema);
