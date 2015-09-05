var fs = require('fs')

fs.readFile(__filename, function(err, data) {
  if(err) {
    throw err
  }
  console.log(data)
})
