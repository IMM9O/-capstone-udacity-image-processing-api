import sharp from 'sharp';
import fs from 'fs';
import { convertedImageName } from './image';

export const resizeImage = async (
  name: string,
  format: string,
  width: number,
  height: number,
): Promise<string | Error> => {
  try {
    // const readStream = fs.createReadStream(
    //   'src/public/images/' + name + '.jpg',
    // );

    const newFileName = convertedImageName(
      name,
      width,
      height,
      format,
    );
    console.log(newFileName);
    await sharp('src/public/images/' + name + '.jpg')
      .toFormat((format as unknown) as sharp.AvailableFormatInfo)
      .resize(width, height)
      .toFile('src/public/thumbnails/' + newFileName);

    return newFileName;
  } catch (error) {
    console.log(error);
    return 'Error';
  }
};
