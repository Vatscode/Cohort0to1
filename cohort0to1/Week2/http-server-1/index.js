const express = require('express');
const path = require('path');
const app = require('./app');
const port = 2000;
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
