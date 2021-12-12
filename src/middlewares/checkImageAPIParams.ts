import express from 'express';
import { Image } from '../types/Image';

const checkImageAPIParams = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const value = (req.query as unknown) as Image;

  console.log('Check Image API Params Middleware');

  if (!value.name || !value.width || !value.height) {
    res.status(400);
    res.json({
      error: 'Missing mandatory param name, width or height',
    });
  } else {
    next();
  }
};

export default checkImageAPIParams;
