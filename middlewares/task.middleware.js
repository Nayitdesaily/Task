const { Task } = require('../models/task.model');

const activeTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    const task = await Task.findOne({ where: [{ id }, { status: 'active' }] });

    if (!task) {
      return res.status(404).json({
        status: 'error',
        message: 'Task not found',
      });
    }

    req.task = task;
    next();
  } catch (error) {
    console.log(error);
  }
};

const validateStatusTask = async (req, res, next) => {
  try {
    const { status } = req.params;
    const levelsOfStatus = ['active', 'completed', 'late', 'cancelled'];
    let allowed = false;
    levelsOfStatus.map((level) => {
      if (level === status) {
        allowed = true;
        req.status = status;
      }
    });
    if (!allowed) {
      return res.status(404).json({
        status: 'error',
        message: 'Status not found',
      });
    }
  } catch (error) {
    console.log(error);
  }
  next();
};

module.exports = { activeTask, validateStatusTask };
