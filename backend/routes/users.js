import express from 'express';

import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from '../controllers/user.js';
import { verifyToken } from '../utils/verify_token.js';

const router = express.Router();

// Verification the user with jwt Token
router.get('/check-auth', verifyToken, (req, res, next) => {
  res.send('hello user, you are logged in');
});

// Get All the Users from DB
router.get('/', getUsers);

//Get The User with Id
router.get('/:id', getUser);

// Update the User Data
router.put('/:id', updateUser);

// Delete the User Object from DB
router.delete('/:id', deleteUser);

export default router;
