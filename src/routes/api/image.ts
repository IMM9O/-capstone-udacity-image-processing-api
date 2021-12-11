import express from 'express';
import { handleResizeAPI } from '../../utilities/controllers';

const images = express.Router();

images.get('/', handleResizeAPI);

export default images;
