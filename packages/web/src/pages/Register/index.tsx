import React from 'react'

import { Container } from './styles'

import logoImg from '../../assets/images/logo.svg'
import bgImg from '../../assets/images/success-background.svg'
import RegisterForm from '../../components/RegisterForm'

function Register() {
  return (
    <Container>
      <div id="page-register">
        <div id="page-register-content" className="container">
          <div className="logo-container" id="logo-container-mobile">
            <img src={bgImg} alt="Background" className="background-shapes" />
            <div className="logo-wrapper">
              <img src={logoImg} alt="Proffy" className="logo-image" />
              <h2>Sua plataforma de estudos online.</h2>
            </div>
          </div>

          <div className="register-container">
            <RegisterForm />
          </div>

          <div className="logo-container" id="logo-container-web">
            <img src={bgImg} alt="Background" className="background-shapes" />
            <div className="logo-wrapper">
              <img src={logoImg} alt="Proffy" className="logo-image" />
              <h2>Sua plataforma de estudos online.</h2>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Register
