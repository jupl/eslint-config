'use strict'

var test = require('ava')
var eslint = require('eslint')
var extend = require('extend')
var path = require('path')
var tempWrite = require('temp-write')
var configs = {default: require('../default')}
configs.browser = extend(true, {}, configs.default, require('../browser'))
configs.babel = extend(true, {}, configs.default, require('../babel'))

test(function testDefault(t) {
  var result = lint('default.js', configs.default)
  t.is(result.warningCount, 0)
  t.is(result.errorCount, 0)
  t.end()
})

test(function testBadDefault(t) {
  var result = lint('default-bad.js', configs.default)
  var rules = getRules(result)
  t.is(result.warningCount, 1)
  t.is(result.errorCount, 3)
  t.same(rules, [
    'no-mixed-requires',
    'no-process-exit',
    'no-unused-vars',
    'one-var',
  ])
  t.end()
})

test(function testBrowser(t) {
  var result = lint('browser.js', configs.browser)
  t.is(result.warningCount, 0)
  t.is(result.errorCount, 0)
  t.end()
})

test(function testBadBrowser(t) {
  var result = lint('browser-bad.js', configs.browser)
  var rules = getRules(result)
  t.is(result.warningCount, 0)
  t.is(result.errorCount, 4)
  t.same(rules, [
    'no-process-env',
    'no-undef',
    'no-undef',
    'no-undef',
  ])
  t.end()
})

test(function testBabel(t) {
  var result = lint('babel.js', configs.babel)
  t.is(result.warningCount, 0)
  t.is(result.errorCount, 0)
  t.end()
})

test(function testBadBabel(t) {
  var result = lint('babel-bad.js', configs.babel)
  var rules = getRules(result)
  t.is(result.warningCount, 1)
  t.is(result.errorCount, 4)
  t.same(rules, [
    'func-names',
    'no-process-exit',
    'no-unused-vars',
    'no-var',
    'prefer-arrow-callback',
  ])
  t.end()
})

function lint(fixture, config) {
  var fixtureFile = path.join(__dirname, 'fixtures', fixture)
  var linter = new eslint.CLIEngine({
    useEslintrc: false,
    configFile: tempWrite.sync(JSON.stringify(config)),
  })
  return linter.executeOnFiles([fixtureFile]).results[0]
}

function getRules(result) {
  return result.messages
    .map(function(message) { return message.ruleId })
    .sort()
}
