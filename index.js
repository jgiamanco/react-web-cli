const express = require('express');
const fs = require('fs');

const app = express();

const FileSystem = process.cwd();

console.log(FileSystem);

app.get('/api', (req, res, next) => {
  res.send('Server Connected');
});

app.get('/fileSystem', (req, res) => {
  res.status(200).send({ path: `${FileSystem}` });
});

const PORT = process.env.PORT || 3400;

app.listen(PORT);
