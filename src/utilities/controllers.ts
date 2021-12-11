import express from 'express';
import path from 'path';
import { thumbnailsRelativePath } from '../constants/paths';
import { Image } from '../types/Image';

import { resizeImage } from './sharp';

export const handleResizeAPI = async (
  req: express.Request,
  res: express.Response,
) => {
  const value = (req.query as unknown) as Image;

  const newFile = await resizeImage(
    value.name,
    value.format,
    parseInt(value.width),
    parseInt(value.height),
  );

  res.type(`image/${value.format || 'jpg'}`).status(200);
  res.sendFile(newFile as string, {
    root: path.join(__dirname, thumbnailsRelativePath),
  });
};
