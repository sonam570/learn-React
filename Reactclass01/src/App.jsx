
/*const App = () => {
  return (
    <div>
      <h1>Hrllo</h1>
      <h2>hello</h2>
      <h3>Hello React</h3>
    </div>
  )
}

export default App*/

import React from 'react'

const App = () => {
  return (
    <>
      <div id="parent1">
      <h1 id="child1">Hello child1</h1>
      <h2 id="child2">Hello child2</h2>
      </div>
      <div id="parent2">
      <h3 id="child3">child of parent 2</h3>
      </div>
    </>
  )
}

export default App

