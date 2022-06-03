import express from 'express';
import { json } from 'body-parser';
import { testRouter } from './routes/test-route';
import { connect } from './database/connect';

const PORT = 3000;

const app = express();

app.use(json());
app.use(testRouter);

app.listen(PORT, async () => {
    console.log(`Server is listening on port ${PORT}`);

    connect(`mongodb://localhost:27017/test-database`);
});
