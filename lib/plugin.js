var stylus = require('stylus');

exports = module.exports = plugin;
exports.path = __dirname;
exports.version = require('../package.json').version;


function plugin(options) {
  return function(style) {
    var limit = options.limit || 10000;
    var ieSupport = typeof options.ieSupport === 'undefined' ? true : options.ieSupport;

    style.include(__dirname);
    style.define('data-url', stylus.url({
      limit: limit
    }));
    style.define('ieSupport', ieSupport);
  };
}