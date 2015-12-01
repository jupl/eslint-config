'use strict'

var defaultConfig = require('./config/default')
var config = module.exports = require('./config/babel')
var rules = [
  'arrow-parens',
  'generator-star-spacing',
  'new-cap',
  'object-curly-spacing',
  'object-shorthand',
]

rules.filter(hasRuleInDefault).forEach(useBabelRule)

function hasRuleInDefault(rule) {
  return !!defaultConfig.rules[rule]
}

function useBabelRule(rule) {
  config.rules['babel/' + rule] = defaultConfig.rules[rule]
  config.rules[rule] = 0
}
