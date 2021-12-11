import express from 'express';
import path from 'path';

import { resizeImage } from './sharp';

interface Image {
  name: string;
  format: string;
  width: string;
  height: string;
}

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

  res.type(`image/${value.format || 'png'}`).status(200);
  res.sendFile(newFile as string, {
    root: path.join(__dirname, '../public/thumbnails'),
  });
};
