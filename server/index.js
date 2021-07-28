const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT;

const app = express();

app.listen(PORT, () => {
  console.log('Server is running!🚀')
})

