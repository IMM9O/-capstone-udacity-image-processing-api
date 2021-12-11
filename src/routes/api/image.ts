import express from 'express';
import checkIfImageExist from '../../middlewares/checkIfImageExist';
import checkIfThumbnailExist from '../../middlewares/checkIfThumbnailExist';
import { handleResizeAPI } from '../../utilities/controllers';

const images = express.Router();

images.get(
  '/',
  [checkIfImageExist, checkIfThumbnailExist],
  handleResizeAPI,
);

export default images;
