import express from 'express';

import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from '../controllers/user.js';
import {
  verifyAdmin,
  verifyUser,
} from '../utils/verify_token.js';

const router = express.Router();

//Verification the user with jwt Token
// router.get('/check-auth', verifyToken, (req, res, next) => {
//   res.send('hello user, you are logged in');
// });
// router.get('/check-user/:id', verifyUser, (req, res, next) => {
//   res.send('hello user, you are loged with your id');
// });

// router.get('/check-admin/:id', verifyAdmin, (req, res, next) => {
//   res.send('hello admin, you are loged with your id');
// });

// Get All the Users from DB
router.get('/', verifyAdmin, getUsers);

//Get The User with Id
router.get('/:id', verifyUser, getUser);

// Update the User Data
router.put('/:id', updateUser);

// Delete the User Object from DB
router.delete('/:id', deleteUser);

export default router;
