import jwt from 'jsonwebtoken';
import { createError } from '../utils/error.js';
import User from '../models/User.js';

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, 'You are not authenticated'));
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, 'Token is not valid!'));
    req.user = user;
    // console.log(user);
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    verifyId(req.params.id, req.user.id);
  });
};

const verifyId = async (reqID, userID) => { 
  const user = await User.findById(userID);

  if (user._id === reqID) {
    next();
  } else {
    return next(createError(403, 'You are Not Authorized!'));
  }
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, 'You are not authorized!'));
    }
  });
};
