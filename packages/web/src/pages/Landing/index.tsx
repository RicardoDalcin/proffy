import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import { Container } from './styles'
import api from '../../services/api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'

function Landing() {
  const [totalConnections, setTotalConnections] = useState(0)

  useEffect(() => {
    api.get('/connections').then(res => {
      setTotalConnections(res.data.total)
    })
  }, [])

  return (
    <Container>
      <div id="page-landing-content" className="container">
        <div className="landing-top-container">
          <div className="landing-top-content">
            <div className="user-header">
              <div className="user-information">
                <img
                  src="https://avatars0.githubusercontent.com/u/58394781?s=460&u=e083b958ef3a7e128dedc5a94a4f040d8924296e&v=4"
                  className="user-avatar"
                />
                <div className="user-name">Ricardo Dalcin</div>
              </div>
              <button className="logout-button">
                <FontAwesomeIcon icon={faPowerOff} />
              </button>
            </div>
            <div className="logo-hero-container">
              <div className="logo-container">
                <img src={logoImg} alt="Proffy" />
                <h2>Sua plataforma de estudos online.</h2>
              </div>
              <img
                src={landingImg}
                alt="Plataforma de estudos"
                className="hero-image"
              />
            </div>
          </div>
        </div>

        <div className="landing-bottom-container">
          <div className="landing-bottom-content">
            <div className="welcome-text-container">
              <div className="welcome-text-title">Seja bem-vindo.</div>
              <div className="welcome-text-sub">O que deseja fazer?</div>
            </div>
            <div className="buttons-container">
              <Link to="/study" className="study">
                <img src={studyIcon} alt="Estudar" />
                Estudar
              </Link>
              <Link to="/teach" className="give-classes">
                <img src={giveClassesIcon} alt="Estudar" />
                Dar aulas
              </Link>
            </div>
            <span className="total-connections">
              <div>
                Total de {totalConnections} conexões já realizadas{' '}
                <img src={purpleHeartIcon} alt="Coração roxo" />
              </div>
            </span>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Landing
