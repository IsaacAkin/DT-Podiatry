import 'dotenv/config.js';
import path from 'node:path';
import express from 'express';
import { fileURLToPath } from 'node:url';
import indexRouter from './src/routes/index-routes.js';
import treatmentsRouter from './src/routes/treatment-routes.js';

const app = express();
const PORT = process.env.PORT || 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const assetsPath = path.join(__dirname, 'src/public'); // for accessing css, js and assets

app.set('views', [
    path.join(__dirname, 'src/views'),
    path.join(__dirname, 'src/views/treatments')
]);
app.set('view engine', 'ejs'); // views template using ejs
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true })); // needed to parse form data into req.body

app.use('/', indexRouter);
app.use('/treatments', treatmentsRouter);


app.listen(PORT, (error) => {
    if (error) {
        console.error(error);
    }

    console.log(`Server running on port: ${PORT}`);
});