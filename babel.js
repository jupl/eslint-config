'use strict'

var baseConfig = require('./config/base')
var config = module.exports = require('./config/babel')
var rules = [
  'arrow-parens',
  'generator-star-spacing',
  'object-curly-spacing',
  'object-shorthand',
]

rules.forEach(function(rule) {
  config.rules['babel/' + rule] = baseConfig.rules[rule]
  config.rules[rule] = 0
})
