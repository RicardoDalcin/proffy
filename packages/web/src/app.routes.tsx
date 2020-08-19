import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import Landing from './pages/Landing'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Landing} />
    </BrowserRouter>
  )
}

export default AppRoutes
