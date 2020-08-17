import React, { useState, FormEvent, useContext } from 'react'
import { Link } from 'react-router-dom'

import { Container } from './styles'

import backIcon from '../../assets/images/icons/back.svg'
import FloatingInput from '../FloatingInput'
import AuthContext from '../../contexts/auth'

const RegisterForm = () => {
  const { signUp } = useContext(AuthContext)

  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPaswword] = useState('')

  const submitRegister = async (e: FormEvent) => {
    e.preventDefault()

    if (name && lastName && email && password) {
      signUp(name, lastName, email, password)
    }
  }

  return (
    <Container>
      <form className="register-form-container" onSubmit={submitRegister}>
        <div className="back-icon-container">
          <Link to="/">
            <img src={backIcon} alt="Voltar" className="back-icon" />
          </Link>
        </div>
        <fieldset>
          <legend>
            Cadastro <p>Preencha os dados abaixo para começar</p>
          </legend>

          <FloatingInput
            name="name"
            label="Nome"
            value={name}
            top
            onChange={e => setName(e.target.value)}
          />

          <FloatingInput
            name="lastName"
            label="Sobrenome"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />

          <FloatingInput
            name="email"
            label="E-mail"
            value={email}
            type="email"
            onChange={e => setEmail(e.target.value)}
          />

          <FloatingInput
            name="password"
            label="Senha"
            type="password"
            value={password}
            bottom
            onChange={e => setPaswword(e.target.value)}
          />

          <button
            disabled={
              name !== '' && lastName !== '' && email !== '' && password !== ''
                ? false
                : true
            }
            type="submit"
            className="register-button"
          >
            Concluir cadastro
          </button>
        </fieldset>
      </form>
    </Container>
  )
}

export default RegisterForm
