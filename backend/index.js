import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRouter from './routes/auth.js';
import hotelsRouter from './routes/hotels.js';
import roomsRouter from './routes/rooms.js';
import usersRouter from './routes/users.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
dotenv.config();

// The initial connect with mongoDB
const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log('Database Connected to mongoDB');
  } catch (error) {
    throw error;
  }
};

// If we have some problem in the database,
// this function will be executed and disconnected our DB
mongoose.connection.on('Disconnected', () => {
  console.log('Database Disconnected');
});

// If this function working in the terminal,
//so our problem is fixed and we get our connection with DB
mongoose.connection.on('Connected', () => {
  console.log('Database Connected');
});

{
  /* --------  The Middlewares --------- */
}
// CORS Middlewares for access the origin control
app.use(cors());

//Cookie
app.use(cookieParser());

// Parsing the data request from the client
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/hotels', hotelsRouter);
app.use('/api/rooms', roomsRouter);
app.use('/api/users', usersRouter);

//Handle middlewares error
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || 'Somthing went wrong!';
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

// The initial connect with server
app.listen(8080, () => {
  dbConnect();
  console.log('Connected to backend!');
});
