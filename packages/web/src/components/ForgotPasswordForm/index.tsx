import React, { useState, FormEvent, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { Container } from './styles'

import backIcon from '../../assets/images/icons/back.svg'
import FloatingInput from '../FloatingInput'
import AuthContext from '../../contexts/auth'
import api from '../../services/api'

const ForgotPasswordForm = () => {
  const history = useHistory()
  const { signUp } = useContext(AuthContext)

  const [email, setEmail] = useState('')

  const submitRegister = async (e: FormEvent) => {
    e.preventDefault()

    if (email) {
      // signUp(name, lastName, email, password)
      history.push('/forgot-password-confirmation')
    }
  }

  const handleDisableButton = () => {
    if (email.includes('@') && email.includes('.')) {
      return false
    } else {
      return true
    }
  }

  return (
    <Container>
      <form className="forgot-form-container" onSubmit={submitRegister}>
        <div className="back-icon-container">
          <Link to="/">
            <img src={backIcon} alt="Voltar" className="back-icon" />
          </Link>
        </div>
        <fieldset>
          <legend>
            Eita, esqueceu sua senha?{' '}
            <p>Não esquenta, vamos dar um jeito nisso.</p>
          </legend>

          <FloatingInput
            name="email"
            label="E-mail"
            value={email}
            type="email"
            onChange={e => setEmail(e.target.value)}
            unique
          />

          <button
            disabled={handleDisableButton()}
            type="submit"
            className="forgot-button"
          >
            Enviar
          </button>
        </fieldset>
      </form>
    </Container>
  )
}

export default ForgotPasswordForm
