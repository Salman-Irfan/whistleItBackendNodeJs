const express = require('express');
const cors = require('cors');
const { config } = require("dotenv");
const connectToMongo = require('./config/db');

config(); // Load environment variables from .env file

const app = express();

const PORT = process.env.PORT || 5000;
connectToMongo();

// use middlewares => app.use cors, json, express.static for image uploads

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('uploads'));

// routes prefix

app.use('/api/v1', require('./routes/routes'));
// app.listen
app.listen(PORT, () => {
    console.log(`MEVN app backend is listening at http://localhost:${PORT}`);
});
