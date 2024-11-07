import express from 'express';
import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from '../controllers/hotel.js';

const router = express.Router();

// Create Hotel
router.post('/', createHotel);

//Update Hotel
router.put('/:id', updateHotel);

//Delete Hotel
router.delete('/:id', deleteHotel);

//get Hotel by id
router.get('/:id', getHotel);

// Get All The Hotels
router.get('/', getHotels);

export default router;
