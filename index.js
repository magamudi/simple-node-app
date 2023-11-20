const express = require('express');
const app = express();

app.get('/', (request, response) => {
  response.send('Krichell Blair is a very smart account director with BBGroup of Companies. Currently BBG is valued at 2Billion dollars but she wont even give me a billion, SAD!!!!.');
});

app.listen(8080, () => {
  console.log('Server is up and running on port 8080');
});