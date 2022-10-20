// for rendering homepage
module.exports.home = (req, res) => {
  return res.render('home');
};

module.exports.upload = (req, res) => {
  return res.send('file rec');
};
