'use strict'

var defaultConfig = require('./config/default')
var config = module.exports = require('./config/babel')
var rules = [
  'arrow-parens',
  'generator-star-spacing',
  'object-curly-spacing',
  'object-shorthand',
]

rules.forEach(function(rule) {
  config.rules['babel/' + rule] = defaultConfig.rules[rule]
  config.rules[rule] = 0
})
