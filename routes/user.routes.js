const express = require('express');

//Middlewares
const { userExist } = require('../middlewares/user.middleware');
const { createUserValidators } = require('../middlewares/validator.middleware');

//Controllers
const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/user.controller');

const userRouter = express.Router();

userRouter.get('/', getAllUsers);
userRouter.post('/', createUserValidators, createUser);
userRouter.patch('/:id', userExist, updateUser);
userRouter.delete('/:id', userExist, deleteUser);

module.exports = { userRouter };
