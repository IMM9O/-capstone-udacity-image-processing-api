import express from 'express';
import fs from 'fs';
import path from 'path';
import {
  thumbnailsAbsolutePath,
  thumbnailsRelativePath,
} from '../constants/paths';
import { Image } from '../types/Image';
import { convertedImageName } from '../utilities/image';

const checkIfThumbnailExist = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const value = (req.query as unknown) as Image;

  const fileName = convertedImageName(
    value.name,
    parseInt(value.width),
    parseInt(value.height),
    value.format,
  );

  try {
    if (fs.existsSync(thumbnailsAbsolutePath + '/' + fileName)) {
      console.log('Thumbnail Image Exist');
      res.type(`image/${value.format || 'jpg'}`).status(200);
      res.sendFile(fileName as string, {
        root: path.join(__dirname, thumbnailsRelativePath),
      });
    }
  } catch (err) {
    console.error(err);
    next();
  }
};

export default checkIfThumbnailExist;
