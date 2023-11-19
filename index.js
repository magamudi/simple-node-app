const express = require('express');
const app = express();

app.get('/', (request, response) => {
  response.send('Hello, My name is Magnus Amudi Esq. An attorney and a DevOps Engineer');
});

app.listen(8080, () => {
  console.log('Server is up and running on port 8080');
});