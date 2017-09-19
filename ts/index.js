'use strict'

module.exports = require('../config/ts/base')

module.exports.jsRules = [
  'adjacent-overload-signatures',
  'ban-types',
  'member-access',
  'no-any',
  'no-inferrable-types',
  'no-internal-module',
  'no-var-requires',
  'typedef',
  'typedef-whitespace',
  'await-promise',
  'no-floating-promises',
  'no-misused-new',
  'no-unbound-method',
  'no-unused-variable',
  'strict-boolean-expressions',
  'strict-type-predicates',
  'no-unnecessary-qualifier',
  'array-type',
  'no-angle-bracket-type-assertion',
  'no-boolean-literal-compare',
  'no-object-literal-type-assertion',
  'no-reference-import',
  'no-unnecessary-type-assertion',
].reduce(function(rules, rule) {
  delete rules[rule]
  return rules
}, Object.assign({}, module.exports.rules))
