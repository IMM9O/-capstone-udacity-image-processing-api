import sharp from 'sharp';
import {
  imagesAbsolutePath,
  thumbnailsAbsolutePath,
} from '../constants/paths';
import { convertedImageName } from './image';

export const resizeImage = async (
  name: string,
  format: string,
  width: number,
  height: number,
): Promise<string> => {
  try {
    const newFileName = convertedImageName(
      name,
      width,
      height,
      format,
    );
    await sharp(imagesAbsolutePath + '/' + name + '.jpg')
      .toFormat((format as unknown) as sharp.AvailableFormatInfo)
      .resize(width, height)
      .toFile(thumbnailsAbsolutePath + '/' + newFileName);

    return newFileName;
  } catch (error) {
    return 'Error';
  }
};
