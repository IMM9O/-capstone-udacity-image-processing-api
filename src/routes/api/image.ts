import express from 'express';
const images = express.Router();

images.get('/', (req, res) => {
  res.send('Image API Routes');
});

export default images;
