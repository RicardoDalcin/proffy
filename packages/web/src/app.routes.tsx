import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Route
        exact
        path="/"
        component={() => {
          return <div>hello</div>
        }}
      />
    </BrowserRouter>
  )
}

export default AppRoutes
