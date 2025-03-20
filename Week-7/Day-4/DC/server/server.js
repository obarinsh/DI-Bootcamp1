const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('../models/authModel.js');


dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);

app.listen(3000, () => console.log('Server running on port 3000!'));