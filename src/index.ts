import express from 'express';
import morgan from './middlewares/logger';
import routes from './routes';

const app = express();
const port = 3000;

app.use(morgan);
app.use('/api', routes);
// Check this link for more details 👉 http://expressjs.com/en/starter/static-files.html#serving-static-files-in-express
app.use(express.static(__dirname + '/public'));

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

export default app;
