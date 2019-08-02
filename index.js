const express = require('express');

const app = express();

app.get('/api', (req, res, next) => {
  res.send('Server Connected');
});

const PORT = process.env.PORT || 3400;

app.listen(PORT);
