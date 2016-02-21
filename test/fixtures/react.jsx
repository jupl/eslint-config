var React = require('react')

module.exports = function() {
  return (
    <div>
      <button onClick={handler}>Hello</button>
    </div>
  )
}

function handler() {
  console.log('Handled')
}
