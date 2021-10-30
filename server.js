const path = require('path');
const express = require('express');

const app = express();
const router = express.Router();

const PORT = process.env.PORT || 3000;

app.listen(PORT);
router.use(express.static('build'));
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './build/index.html'));
});
app.use('/', router);
