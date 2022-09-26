import express, {Express} from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import router from  './router';
const db = require('../db');

dotenv.config();


const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use('/fosters', router);


app.listen(port, (): void => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});