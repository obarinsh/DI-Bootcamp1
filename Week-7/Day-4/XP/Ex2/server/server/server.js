const express = require('express');
const dotenv = require('dotenv');
const booksRoutes = require('../models/booksModel.js');

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api', booksRoutes);

app.listen(3000, () => console.log('Server running on port 3000!'));