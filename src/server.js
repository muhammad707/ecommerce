const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const { connectDb } = require('../services/db');

const app = express();
app.use(express.json());

const PORT = process.env.APP_PORT || 3000;
app.listen(PORT, connectDb);

