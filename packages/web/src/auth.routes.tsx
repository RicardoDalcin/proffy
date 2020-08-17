import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import RegisterConfirmation from './pages/RegisterConfirmation'

function AuthRoutes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/register-confirmation" component={RegisterConfirmation} />
    </BrowserRouter>
  )
}

export default AuthRoutes
