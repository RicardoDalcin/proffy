import React, { useState, FormEvent } from 'react'
import { Link } from 'react-router-dom'

import { Container } from './styles'

import FloatingInput from '../FloatingInput'
import Checkbox from '../Checkbox'
import api from '@proffy/axios-config'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPaswword] = useState('')
  const [remember, setRemember] = useState(false)

  const submitLogin = (e: FormEvent) => {
    e.preventDefault()

    if (email && password) {
      api
        .post('login', { email, password })
        .then(res => {
          console.log(res)
        })
        .catch(err => {})
    }
  }

  return (
    <Container>
      <form className="login-form-container" onSubmit={submitLogin}>
        <fieldset>
          <legend>Fazer login</legend>

          <FloatingInput
            name="email"
            label="E-mail"
            value={email}
            type="email"
            top
            onChange={e => setEmail(e.target.value)}
          />

          <FloatingInput
            name="password"
            label="Senha"
            type="password"
            value={password}
            onChange={e => setPaswword(e.target.value)}
          />

          <div className="login-footer">
            <Checkbox
              name="remember"
              label="Lembrar-me"
              checked={remember}
              onChange={() => setRemember(!remember)}
            />
            <Link to="/" className="forgot-password">
              Esqueci minha senha
            </Link>
          </div>

          <button
            disabled={email !== '' && password !== '' ? false : true}
            type="submit"
            className="login-button"
          >
            Entrar
          </button>
        </fieldset>
      </form>
    </Container>
  )
}

export default LoginForm
