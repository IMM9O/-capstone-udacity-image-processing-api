import express from 'express';
import morgan from './middlewares/logger';
import routes from './routes';

const app = express();
const port = 3000;

app.use(morgan);
app.use('/api', routes);

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

export default app;
