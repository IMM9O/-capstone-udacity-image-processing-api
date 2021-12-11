import express from 'express';
import fs from 'fs';
import { imagesAbsolutePath } from '../constants/paths';

import { Image } from '../types/Image';

const checkIfImageExist = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const value = (req.query as unknown) as Image;

  console.log('Check Image API Middleware');

  if (!value.name || !value.width || !value.height) {
    res.status(400);
    res.json({
      error: 'Missing mandatory param name, width or height',
    });
  }

  // check if image exist

  try {
    if (
      fs.existsSync(imagesAbsolutePath + '/' + value.name + '.jpg')
    ) {
      console.log('Original Image Exist');
    }
  } catch (err) {
    console.log('Original Image Not Exist')
    res.status(404);
    res.json({
      error: 'Original Image Not Exist',
    });
  }
  next();
};

export default checkIfImageExist;
