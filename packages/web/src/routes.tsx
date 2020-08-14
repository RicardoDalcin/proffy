import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import AppRoutes from './app.routes'
import AuthRoutes from './auth.routes'
import { useContext } from 'react'
import AuthContext from './contexts/auth'

function Routes() {
  const { signed } = useContext(AuthContext)

  return <>{signed ? <AppRoutes /> : <AuthRoutes />}</>
}

export default Routes
