var {readFile} = require('fs')

readFile(__filename, function(err, data) {
  process.exit(err ? 1 : 0)
})
