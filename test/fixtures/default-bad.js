var fs = require('fs'),
    file = __filename

fs.readFile(file, function(err, data) {
  process.exit(err ? 1 : 0)
})
