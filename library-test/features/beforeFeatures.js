const { exec } = require('child_process');

module.exports = function() {
  this.BeforeFeatures(function (event, callback) {
    exec('node ../api/fixtures.js', (err, stdout, stderr) => {
      if (err) {
        console.log(err);
        return;
      }
      callback();
    });
  });
};