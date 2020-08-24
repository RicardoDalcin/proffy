import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import RegisterConfirmation from './pages/RegisterConfirmation'
import ForgotPassword from './pages/ForgotPassword'
import ForgotPasswordConfirmation from './pages/ForgotPasswordConfirmation'

function AuthRoutes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/register-confirmation" component={RegisterConfirmation} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route
        path="/forgot-password-confirmation"
        component={ForgotPasswordConfirmation}
      />
    </BrowserRouter>
  )
}

export default AuthRoutes
