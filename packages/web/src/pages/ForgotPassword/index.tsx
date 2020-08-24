import React from 'react'

import { Container } from './styles'

import logoImg from '../../assets/images/logo.svg'
import bgImg from '../../assets/images/success-background.svg'
import ForgotPasswordForm from '../../components/ForgotPasswordForm'

function ForgotPassword() {
  return (
    <Container>
      <div id="page-forgot">
        <div id="page-forgot-content" className="container">
          <div className="logo-container" id="logo-container-mobile">
            <img src={bgImg} alt="Background" className="background-shapes" />
            <div className="logo-wrapper">
              <img src={logoImg} alt="Proffy" className="logo-image" />
              <h2>Sua plataforma de estudos online.</h2>
            </div>
          </div>

          <div className="forgot-container">
            <ForgotPasswordForm />
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

export default ForgotPassword
