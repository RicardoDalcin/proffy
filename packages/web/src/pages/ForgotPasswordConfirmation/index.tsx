import React from 'react'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import { Container } from './styles'

import bgImg from '../../assets/images/success-background.svg'
import bgVerticalImg from '../../assets/images/background-vertical.svg'

function ForgotPasswordConfirmation() {
  const history = useHistory()

  const navigateToLogin = () => {
    history.push('/')
  }
  return (
    <Container>
      <div id="page-confirmation">
        <img
          src={bgImg}
          className="confirmation-background-img"
          alt="Background"
        />
        <img
          src={bgVerticalImg}
          className="confirmation-background-vertical-img"
          alt="Vertical Background"
        />
        <div id="page-confirmation-content" className="container">
          <div className="confirmation-check">
            <FontAwesomeIcon
              icon={faCheck}
              className="confirmation-check-icon"
            />
          </div>
          <div className="confirmation-title">Redefinição enviada!</div>
          <div className="confirmation-description">
            Boa, agora é só checar o e-mail que foi enviado para você redefinir
            sua senha e aproveitar os estudos.
          </div>
          <button
            className="confirmation-login-button"
            onClick={navigateToLogin}
          >
            Voltar ao login
          </button>
        </div>
      </div>
    </Container>
  )
}

export default ForgotPasswordConfirmation
