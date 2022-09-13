const express = require('express');

//Middlewares
const {
  activeTask,
  validateStatusTask,
} = require('../middlewares/task.middleware');

//Controllers
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  getTasksByStatus,
} = require('../controllers/task.controller');

//Init express router
const taskRouter = express.Router();

//Endpoints requests
taskRouter.get('/', getTasks);
taskRouter.get('/:status', validateStatusTask, getTasksByStatus);
taskRouter.post('/', createTask);
taskRouter.patch('/:id', activeTask, updateTask);
taskRouter.delete('/:id', activeTask, deleteTask);

module.exports = { taskRouter };
