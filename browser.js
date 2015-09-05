'use strict'

var extend = require('extend')
var baseConfig = require('./config/base')
var browserConfig = require('./config/browser')
var config = module.exports = extend(true, {}, baseConfig, browserConfig)

delete config.env.node
