'use strict';

var postcss = require('postcss');
var pxtovw = require('pxtovw');

module.exports = postcss.plugin('postcss-pxtovw', function (options) {
  return function (css, result) {
    var oldCssText = css.toString();
    var px2vw = new pxtovw(options)
    var newCssText = px2vw.converPxToVw(oldCssText);
    var newCssObj = postcss.parse(newCssText);
    result.root = newCssObj;
  };
});
