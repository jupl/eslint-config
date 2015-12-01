import test from 'ava'
import extend from 'extend'
import tempWrite from 'temp-write'
import {CLIEngine} from 'eslint'
import {join} from 'path'
import defaultConfig from '..'
import babelConfig from '../babel'
import browserConfig from '../browser'
import esnextConfig from '../esnext'

const configs = {
  default: defaultConfig,
  browser: extend(true, {}, defaultConfig, browserConfig),
  esnext: extend(true, {}, defaultConfig, esnextConfig),
  babel: extend(true, {}, defaultConfig, esnextConfig, babelConfig),
}

test('Default config: valid', async t => {
  const result = await lint('default.js', configs.default)
  t.is(result.warningCount, 0)
  t.is(result.errorCount, 0)
  t.pass()
})

test('Default config: invalid', async t => {
  const result = await lint('default-bad.js', configs.default)
  const rules = getRules(result)
  t.is(result.warningCount, 1)
  t.is(result.errorCount, 3)
  t.same(rules, [
    'no-mixed-requires',
    'no-process-exit',
    'no-unused-vars',
    'one-var',
  ])
  t.pass()
})

test('Browser config: valid', async t => {
  const result = await lint('browser.js', configs.browser)
  t.is(result.warningCount, 0)
  t.is(result.errorCount, 0)
  t.pass()
})

test('Browser config: invalid', async t => {
  const result = await lint('browser-bad.js', configs.browser)
  const rules = getRules(result)
  t.is(result.warningCount, 0)
  t.is(result.errorCount, 4)
  t.same(rules, [
    'no-process-env',
    'no-undef',
    'no-undef',
    'no-undef',
  ])
  t.pass()
})

test('ESnext config: valid', async t => {
  const result = await lint('esnext.js', configs.esnext)
  t.is(result.warningCount, 0)
  t.is(result.errorCount, 0)
  t.pass()
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
