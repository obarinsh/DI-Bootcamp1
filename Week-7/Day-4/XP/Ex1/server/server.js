const express = require('express');
const dotenv = require('dotenv');
const blogRoutes = require('../models/blogModel.js');

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api', blogRoutes);

app.listen(3000, () => console.log('Server running on port 3000!'));