import express from 'express';
import { verifyAdmin } from '../utils/verify_token.js';
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
} from '../controllers/room.js';

const router = express.Router();

// Get All The Hotels
router.get('/', getRooms);

//get Hotel by id
router.get('/:id', getRoom);

// Create Hotel
router.post('/:hotelid', verifyAdmin, createRoom);

//Update Hotel
router.put('/:id', verifyAdmin, updateRoom);

//Delete Hotel
router.delete('/:id/:hotelid', verifyAdmin, deleteRoom);

export default router;
