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

  res.render('home', {
    // file download url
    fileLink: `${req.headers.origin}/file/${file.id}`,
  });
};

// for file download
module.exports.download = async (req, res) => {
  // finding file by id
  const file = await File.findById(req.params.id);

  // if file have a password
  if (file.password != null) {
    if (req.body.password == null) {
      res.render('password', {
        filename: file.originalName,
      });
      return;
    }

    // comparing inputted password to files password
    const password = await bcrypt.compare(req.body.password, file.password);

    // if password is invalid
    if (!password) {
      return res.render('password', {
        error: true,
      });
    }
  }

  file.downloadCount++;
  await file.save();

  // download file
  res.download(file.path, file.originalName);
};
