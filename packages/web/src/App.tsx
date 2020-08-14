import React from 'react'

import GlobalStyles from './assets/styles/global'
import Routes from './routes'
import { AuthProvider } from './contexts/auth'

function App() {
  return (
    <AuthProvider>
      <Routes />
      <GlobalStyles />
    </AuthProvider>
  )
}

export default App
