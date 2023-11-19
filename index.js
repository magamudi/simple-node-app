const express = require('express');
const app = express();

app.get('/', (request, response) => {
  response.send('I am an expert business and corporate attorney with over 12 years of practical experience in corporate law practice. I am an experienced document and contract drafter, negotiator and reviewer. I am Licensed in the State of New York.');
});

app.listen(8080, () => {
  console.log('Server is up and running on port 8080');
});