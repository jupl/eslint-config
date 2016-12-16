var fs = require('fs')

console.log(process.env.NODE_ENV)

fs.readFile(__filename, function(err, data) {
  if(err) {
    throw err
  }
  console.log(data)
})
