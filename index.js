const express = require('express');

const app = express();
const port = 8000;

// setting view engine to ejs
app.set('view engine', 'ejs');
app.set('views', './views');

// using routes
app.use('/', require('./routes'));

// starting server
app.listen(port, (err) => {
  if (err) {
    console.log(`error in starting server : ${err}`);
    return;
  }

  console.log(`server is running on port : ${port}`);
});
