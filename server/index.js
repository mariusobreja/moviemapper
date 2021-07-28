const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;
const DB_NAME = process.env.DB_NAME;

const app = express();

app.use(cors());

mongoose.connect(`${DB_URL}${DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('database connected!📍')
  })
  .catch((e) => console.log(e));

app.listen(PORT, (e) => {
  if (e) console.log(e);
  console.log(`Server is running on http://localhost:${PORT}!!🚀`)
})

