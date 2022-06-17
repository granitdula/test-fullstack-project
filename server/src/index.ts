import express from 'express';
import { json } from 'body-parser';
import { testRouter } from './routes/test-route';
import { connect } from './database/connect';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const PORT = 5000;

const app = express();

app.use(
    cors({
        origin: process.env.CLIENT_URL,
    }),
);
app.use(json());
app.use(testRouter);

app.listen(PORT, async () => {
    console.log(`Server is listening on port ${PORT}`);
    connect(`mongodb://localhost:27017/test-database`);
});
