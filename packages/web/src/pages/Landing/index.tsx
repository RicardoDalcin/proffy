import React from 'react'

import { Container } from './styles'

import logoImg from '../../assets/images/logo.svg'
import bgImg from '../../assets/images/success-background.svg'
import LoginForm from '../../components/LoginForm'

function Landing() {
  return (
    <Container>
      <div id="page-landing">
        <div id="page-landing-content" className="container">
          <div className="logo-container">
            <img src={bgImg} alt="Background" className="background-shapes" />
            <div className="logo-wrapper">
              <img src={logoImg} alt="Proffy" className="logo-image" />
              <h2>Sua plataforma de estudos online.</h2>
            </div>
          </div>

          <div className="login-container">
            <LoginForm />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Landing
