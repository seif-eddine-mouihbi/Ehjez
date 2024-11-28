import express from 'express';
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getHotel,
  getHotelRoom,
  getHotels,
  updateHotel,
} from '../controllers/hotel.js';
import { verifyAdmin } from '../utils/verify_token.js';

const router = express.Router();

{
  /* -------- CRUD Router ---------*/
}

// Get All The Hotels
router.get('/', getHotels);

//get Hotel by id
router.get('/find/:id', getHotel);

// Create Hotel
router.post('/', verifyAdmin, createHotel);

//Update Hotel
router.put('/:id', verifyAdmin, updateHotel);

//Delete Hotel
router.delete('/:id', verifyAdmin, deleteHotel);

{
  /* -------- Secondary Router -------- */
}

// Get The Hotels By Type
router.get('/countByType', countByType);

// Get The Hotels By City
router.get('/countByCity', countByCity);

// Get The Hotel Rooms
router.get('/room/:id', getHotelRoom);

export default router;
