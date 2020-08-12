import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={() => <div>Hello world</div>} />
    </BrowserRouter>
  )
}

export default Routes