import express from 'express';
import path from 'path';
import {requestTime, logger} from './middlewares.js'

const __dirname = path.resolve()
const PORT = 3000;
const app = express();

app.use(express.static(path.resolve(__dirname,'static')));
app.use(requestTime)
app.use(logger)


app.listen(PORT, (req, res) => {
    console.log(`Server running on port ${PORT}...`);
});