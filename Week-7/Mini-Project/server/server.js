const express = require('express');
const fs = require('fs');
const path = require('path');
const taskRoutes = require('../models/taskModel');

const app = express();

app.use(express.json());

app.use('/api/', taskRoutes);

app.listen(3000, () => console.log('Server running on port 3000!'));