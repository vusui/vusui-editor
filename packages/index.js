'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./lib/vusui-editor.umd.js');
} else {
  module.exports = require('./lib/vusui-editor.es.js');
}
