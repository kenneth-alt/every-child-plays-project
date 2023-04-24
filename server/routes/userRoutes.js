import express from 'express';
import { createUser, getUserById, updateUserById, deleteUserById } from '../controllers/userController.js';

const userRouter = express.Router();

// Create a new user
userRouter.post('/register', createUser);

// Get a user by ID
userRouter.get('/:id', getUserById);

// Update a user by ID
userRouter.patch('/:id', updateUserById);

// Delete a user by ID
userRouter.delete('/:id', deleteUserById);

export default userRouter
