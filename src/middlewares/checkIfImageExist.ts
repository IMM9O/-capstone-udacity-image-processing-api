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
  console.log('Check Image Exist Middleware');

  // check if image exist
  try {
    if (
      fs.existsSync(imagesAbsolutePath + '/' + value.name + '.jpg')
    ) {
      next();
    } else {
      res.status(404);
      res.json({
        error: 'Original Image Not Found',
      });
    }
  } catch (err) {
    res.status(404);
    res.json({
      error: 'Original Image Not Found',
    });
  }
};

export default checkIfImageExist;
