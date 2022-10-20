const express = require('express');

const app = express();

const port = 8000;

app.listen(port, (err) => {
  if (err) {
    console.log(`error in starting server : ${err}`);
    return;
  }

  console.log(`server is running on port : ${port}`);
});
