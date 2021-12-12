import express from 'express';
import checkIfImageExist from '../../middlewares/checkIfImageExist';
import checkIfThumbnailExist from '../../middlewares/checkIfThumbnailExist';
import checkImageAPIParams from '../../middlewares/checkImageAPIParams';
import { handleResizeAPI } from '../../utilities/controllers';

const images = express.Router();

images.get(
  '/',
  [checkImageAPIParams, checkIfImageExist, checkIfThumbnailExist],
  handleResizeAPI,
);

export default images;
