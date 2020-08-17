import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'

function AuthRoutes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
    </BrowserRouter>
  )
}

export default AuthRoutes
