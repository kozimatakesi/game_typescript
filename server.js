const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
require('dotenv').config();

app.use(express.static('build'));
app.listen(PORT, () => console.log('Listening on port ', PORT));
