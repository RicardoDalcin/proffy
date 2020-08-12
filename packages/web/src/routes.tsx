import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './pages/Landing'

function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Landing} />
      <Route path="/study" component={Landing} />
      <Route path="/teach" component={Landing} />
    </BrowserRouter>
  )
}

export default Routes
