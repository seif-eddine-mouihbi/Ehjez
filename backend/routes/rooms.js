import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('this is the first auth connection');
});

router.get('/register', (req, res) => {
  res.send('this is the first auth connection');
});

export default router;
