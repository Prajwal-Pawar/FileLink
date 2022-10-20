const bcrypt = require('bcrypt');
const File = require('../models/file');

// for rendering homepage
module.exports.home = (req, res) => {
  return res.render('home');
};

// for file upload
module.exports.upload = async (req, res) => {
  // save uploaded file to DB
  const fileData = {
    path: req.file.path,
    originalName: req.file.originalname,
  };

  if (req.body.password != null && req.body.password !== '') {
    // encrypting password
    fileData.password = await bcrypt.hash(req.body.password, 10);
  }

  // create file
  const file = await File.create(fileData);
  console.log(file);
  console.log(req.body.password);
  res.send(file.originalName);
};
