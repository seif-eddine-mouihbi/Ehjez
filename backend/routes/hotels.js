import express from 'express';
import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from '../controllers/hotel.js';
import { verifyAdmin } from '../utils/verify_token.js';

const router = express.Router();

// Create Hotel
router.post('/', verifyAdmin, createHotel);

//Update Hotel
router.put('/:id', verifyAdmin, updateHotel);

//Delete Hotel
router.delete('/:id', verifyAdmin, deleteHotel);

//get Hotel by id
router.get('/:id', getHotel);

// Get All The Hotels
router.get('/', getHotels);

export default router;
