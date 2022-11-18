'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/vusui-editor.umd.js');
} else {
  module.exports = require('./dist/vusui-editor.es.js');
}
