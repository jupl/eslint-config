import test from 'ava'
import extend from 'extend'
import tempWrite from 'temp-write'
import babelConfig from '../babel'
import baseConfig from '..'
import browserConfig from '../browser'
import esnextConfig from '../esnext'
import reactConfig from '../react'
import {CLIEngine} from 'eslint'
import {join} from 'path'

const configs = {
  base: baseConfig,
  browser: extend(true, {}, baseConfig, browserConfig),
  esnext: extend(true, {}, baseConfig, esnextConfig),
  babel: extend(true, {}, baseConfig, esnextConfig, babelConfig),
  react: extend(true, {}, baseConfig, reactConfig),
}

test('Base config: valid', async t => {
  const result = await lint('base.js', configs.base)
  t.is(result.warningCount, 0)
  t.is(result.errorCount, 0)
})

test('Base config: invalid', async t => {
  const result = await lint('base-bad.js', configs.base)
  const rules = getRules(result)
  t.is(result.warningCount, 1)
  t.is(result.errorCount, 3)
  t.same(rules, [
    'no-mixed-requires',
    'no-process-exit',
    'no-unused-vars',
    'one-var',
  ])
})

test('Browser config: valid', async t => {
  const result = await lint('browser.js', configs.browser)
  t.is(result.warningCount, 0)
  t.is(result.errorCount, 0)
})

test('Browser config: invalid', async t => {
  const result = await lint('browser-bad.js', configs.browser)
  const rules = getRules(result)
  t.is(result.warningCount, 0)
  t.is(result.errorCount, 5)
  t.same(rules, [
    'no-implicit-globals',
    'no-process-env',
    'no-undef',
    'no-undef',
    'no-undef',
  ])
})

test('ESnext config: valid', async t => {
  const result = await lint('esnext.js', configs.esnext)
  t.is(result.warningCount, 0)
  t.is(result.errorCount, 0)
})

test('ESnext config: invalid', async t => {
  const result = await lint('esnext-bad.js', configs.esnext)
  const rules = getRules(result)
  t.is(result.warningCount, 1)
  t.is(result.errorCount, 4)
  t.same(rules, [
    'func-names',
    'no-process-exit',
    'no-unused-vars',
    'no-var',
    'prefer-arrow-callback',
  ])
})

test('Babel config: valid', async t => {
  const result = await lint('esnext.js', configs.babel)
  t.is(result.warningCount, 0)
  t.is(result.errorCount, 0)
})

test('Babel config: invalid', async t => {
  const result = await lint('esnext-bad.js', configs.babel)
  const rules = getRules(result)
  t.is(result.warningCount, 1)
  t.is(result.errorCount, 4)
  t.same(rules, [
    'func-names',
    'no-process-exit',
    'no-unused-vars',
    'no-var',
    'prefer-arrow-callback',
  ])
})

test('React config: valid', async t => {
  const result = await lint('react.jsx', configs.react)
  t.is(result.warningCount, 0)
  t.is(result.errorCount, 0)
})

test('React config: invalid', async t => {
  const result = await lint('react-bad.jsx', configs.react)
  const rules = getRules(result)
  t.is(result.warningCount, 0)
  t.is(result.errorCount, 4)
  t.same(rules, [
    'react/jsx-no-bind',
    'react/react-in-jsx-scope',
    'react/react-in-jsx-scope',
    'react/wrap-multilines',
  ])
})

async function lint(fixture, config) {
  const fixtureFile = join(__dirname, 'fixtures', fixture)
  const linter = new CLIEngine({
    useEslintrc: false,
    configFile: await tempWrite(JSON.stringify(config)),
  })
  const [result] = linter.executeOnFiles([fixtureFile]).results
  return result
}

function getRules(result) {
  return result.messages.map(({ruleId}) => ruleId).sort()
}
