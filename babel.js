'use strict'

var configs = {
  base: require('./config/base'),
  babel: require('./config/babel'),
}
var rules = [
  'array-bracket-spacing',
  'arrow-parens',
  'generator-star-spacing',
  'new-cap',
  'object-curly-spacing',
  'object-shorthand',
]
module.exports = configs.babel

rules.filter(hasRuleInBase).forEach(useBabelRule)

function hasRuleInBase(rule) {
  return !!configs.base.rules[rule]
}

function useBabelRule(rule) {
  configs.babel.rules['babel/' + rule] = configs.base.rules[rule]
  configs.base.rules[rule] = 0
}
