import React, { createContext, useState } from 'react'
import * as auth from '../services/auth'
import api from '@proffy/axios-config'
import { useEffect } from 'react'

interface AuthContextData {
  signed: boolean
  user: object | null
  signIn(email: string, password: string): Promise<void>
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null)

  useEffect(() => {
    const storagedUser = localStorage.getItem('@Proffy:user')
    const storagedToken = localStorage.getItem('@Proffy:token')

    console.log(storagedToken)

    if (storagedUser && storagedToken) {
      setUser(JSON.parse(storagedUser))
    }
  }, [])

  async function signIn(email, password) {
    const response = await auth.signIn(email, password)

    const { token, user } = response

    localStorage.setItem('@Proffy:user', JSON.stringify(user))
    localStorage.setItem('@Proffy:token', token)
    setUser(user)
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
