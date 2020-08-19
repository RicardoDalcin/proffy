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

  #page-landing-content {
    height: 100vh;
    width: 100%;
    max-width: 100%;
  }

  .landing-top-container {
    height: 45vh;
    padding: 3.2rem;
  }

  .landing-bottom-container {
    height: 55vh;
    padding: 3.2rem;
    background-color: ${theme.boxFooter};
  }

  .landing-top-container,
  .landing-bottom-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .user-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .user-information {
    display: flex;
    align-items: center;
  }

  .user-avatar {
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    margin-right: 2.4rem;
  }

  .logout-button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.8rem;
    border: none;
    height: 3.6rem;
    width: 3.6rem;
    cursor: pointer;
    font-size: 1.8rem;
    color: ${theme.textInPrimary};
    background: ${theme.primaryDark};
  }

  .logout-button:hover {
    background: ${theme.primaryDarker};
  }

  .logo-container {
    display: none;
  }

  .hero-image {
    width: 100%;
    max-height: 250px;
    margin-top: 5.4rem;
  }

  .welcome-text-container .welcome-text-title,
  .welcome-text-container .welcome-text-sub {
    color: ${theme.textBase};
    font-size: 2rem;
  }

  .welcome-text-container .welcome-text-sub {
    font-weight: 700;
  }

  .buttons-container {
    display: flex;
    justify-content: space-between;
    margin: 3.2rem 0;
  }

  .buttons-container a {
    width: 18rem;
    height: 18rem;
    border-radius: 0.8rem;
    font: 700 2rem Archivo;
    padding: 3.2rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    text-decoration: none;
    color: ${theme.buttonText};
    font-size: 2.2rem;

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
    justify-content: flex-start;
    margin-top: 4rem;
    color: ${theme.textInput};
    max-width: 180px;
  }

  .total-connections img {
    margin-left: 0.8rem;
  }

  @media (min-width: 1100px) {
    #page-landing-content {
      max-width: 100vw;
    }

    .landing-top-container,
    .landing-bottom-container {
      padding: 0;
      margin: 0;
      display: flex;
      justify-content: center;
    }

    .landing-top-content,
    .landing-bottom-content {
      width: 80%;
      max-width: 1350px;
    }

    .landing-top-container {
      height: 65vh;
    }

    .landing-bottom-container {
      height: 35vh;
    }

    .landing-top-content {
      display: flex;
      flex-direction: column;
      align-items: space-between;
      justify-content: flex-start;
    }

    .logo-hero-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 3.2rem;
      min-width: 700px;
    }

    .logo-container {
      display: block;
    }

    .logo-container img {
      height: 12rem;
    }

    .logo-container h2 {
      font-weight: 400;
      font-size: 4rem;
      line-height: 4.6rem;
      margin-top: 0.8rem;
      max-width: 380px;
    }

    .hero-image {
      width: 50%;
      min-width: 500px;
      max-height: none;
    }

    .landing-bottom-container {
      align-items: flex-start;
      padding-top: 2.4rem;
    }

    .landing-bottom-content {
      display: grid;
      grid-template-rows: 200px 1fr;
      grid-template-columns: 1fr 1fr 2fr;
      grid-template-areas: 'text connections buttons';
    }

    .welcome-text-container {
      grid-area: text;
      margin: auto 0;
    }

    .total-connections {
      grid-area: connections;
      text-align: right;
      margin: auto 2.4rem auto auto;
    }

    .buttons-container {
      grid-area: buttons;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .buttons-container a {
      width: 26rem;
      height: 10rem;
      border-radius: 0.8rem;
      font: 700 2rem Archivo;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      text-decoration: none;
      color: ${theme.buttonText};
      font-size: 2.2rem;

      transition: background-color 0.2s;
    }
  }
`
