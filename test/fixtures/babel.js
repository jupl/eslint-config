import {readFile} from 'fs'

readFile(__filename, (err, data) => {
  if(err) {
    throw err
  }
  console.log(data)
})
