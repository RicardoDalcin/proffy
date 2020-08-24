import React, { createContext, useState } from 'react'
import * as auth from '../services/auth'
import api from '@proffy/axios-config'
import { useEffect } from 'react'

export interface AuthContextData {
  signed: boolean
  user: {} | null
  signIn(email: string, password: string): Promise<void>
  signUp(
    name: string,
    lastName: string,
    email: string,
    password: string
  ): Promise<void>
  signOut(): Promise<void>
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null)

  useEffect(() => {
    const storagedUser = localStorage.getItem('@Proffy:user')
    const storagedToken = localStorage.getItem('@Proffy:token')

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

  async function signUp(name, lastName, email, password) {
    const compoundName = `${name} ${lastName}`

    const response = await auth.signUp(compoundName, email, password)
  }

  async function signOut() {
    const response = await auth.signOut()

    localStorage.removeItem('@Proffy:token')
    localStorage.removeItem('@Proffy:user')
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, signIn, signUp, signOut }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
