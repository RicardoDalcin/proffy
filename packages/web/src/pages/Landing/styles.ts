import styled from 'styled-components'
import theme from '../../assets/styles/theme'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${theme.textInPrimary};
  background: ${theme.primary};

  .logo-container img {
    height: 10rem;
  }

  .hero-image {
    width: 100%;
  }

  .logo-container {
    text-align: center;
    margin-bottom: 3.2rem;
  }

  .logo-container h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }

  .buttons-container {
    display: flex;
    justify-content: center;
    margin: 3.2rem 0;
  }

  .buttons-container a {
    width: 30rem;
    height: 10.4rem;
    border-radius: 0.8rem;
    font: 700 2rem Archivo;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: ${theme.buttonText};

    transition: background-color 0.2s;
  }

  .buttons-container a:first-child {
    margin-right: 1.6rem;
  }

  .buttons-container a img {
    width: 4rem;
  }

  .buttons-container a.study {
    background: ${theme.primaryLighter};
  }

  .buttons-container a.give-classes {
    background: ${theme.secondary};
  }

  .buttons-container a.study:hover {
    background: ${theme.primaryLight};
  }

  .buttons-container a.give-classes:hover {
    background: ${theme.secondaryDark};
  }

  .buttons-container a img {
    margin-right: 2.4rem;
  }

  .total-connections {
    font-size: 1.4rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .total-connections img {
    margin-left: 0.8rem;
  }

  @media (min-width: 1100px) {
    #page-landing-content {
      max-width: 1100px;

      display: grid;
      grid-template-rows: 350px 1fr;
      grid-template-columns: 2fr 1fr 1fr;
      grid-template-areas: 'logo hero hero' 'buttons buttons total';
    }

    .logo-container {
      grid-area: logo;
      align-self: center;
      text-align: left;
      margin: 0;
    }

    .logo-container h2 {
      text-align: initial;
      font-size: 3.6rem;
    }

    .logo-container img {
      height: 100%;
    }

    .hero-image {
      grid-area: hero;
      justify-self: end;
    }

    .buttons-container {
      grid-area: buttons;
      justify-content: flex-start;
    }

    .buttons-container a {
      font-size: 2.4rem;
    }

    .total-connections {
      grid-area: total;
      justify-self: end;
    }
  }
`
