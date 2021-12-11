import express from 'express';
import imageRouters from './api/image';

const routes = express.Router();

routes.use('/img', imageRouters);

export default routes;
