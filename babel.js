'use strict'

var extend = require('extend')
var baseConfig = require('./config/base')
var babelConfig = require('./config/babel')
var config = module.exports = extend(true, {}, baseConfig, babelConfig)
var rules = [
  'arrow-parens',
  'generator-star-spacing',
  'object-curly-spacing',
  'object-shorthand',
]

rules.forEach(function(rule) {
  config.rules['babel/' + rule] = config.rules[rule]
  config.rules[rule] = 0
})
