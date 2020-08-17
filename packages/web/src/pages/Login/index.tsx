import React from 'react'

import { Container } from './styles'

import logoImg from '../../assets/images/logo.svg'
import bgImg from '../../assets/images/success-background.svg'
import heartIcon from '../../assets/images/icons/purple-heart.svg'
import LoginForm from '../../components/LoginForm'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <Container>
      <div id="page-login">
        <div id="page-login-content" className="container">
          <div className="logo-container">
            <img src={bgImg} alt="Background" className="background-shapes" />
            <div className="logo-wrapper">
              <img src={logoImg} alt="Proffy" className="logo-image" />
              <h2>Sua plataforma de estudos online.</h2>
            </div>
          </div>

          <div className="login-container">
            <LoginForm />
            <div className="register-container">
              <div className="register">
                <span>Não tem conta?</span>
                <Link to="/register">Cadastre-se</Link>
              </div>
              <div className="free-icon">
                É de graça <img src={heartIcon} alt="Heart" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Login
