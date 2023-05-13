import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { router } from './routes';
import db from './config/mongo';

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors()).use(router);
app.use(express.json());

// db().then(() => console.log('conection to data base is ready'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
