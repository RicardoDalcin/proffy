import styled from 'styled-components'
import theme from '../../assets/styles/theme'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${theme.textInPrimary};
  background: ${theme.primary};

  .confirmation-background-img {
    display: none;
  }

  .confirmation-background-vertical-img {
    position: absolute;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    z-index: 1;
  }

  #page-confirmation-content {
    width: 100vw;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 15vh;
    z-index: 10;
    position: relative;
  }

  .confirmation-check {
    border-radius: 2.4rem;
    padding: 2.4rem;
    border: 0.4rem solid ${theme.secondary};
  }

  .confirmation-check-icon {
    color: ${theme.secondary};
    font-size: 3.2rem;
  }

  .confirmation-title {
    font-size: 3.2rem;
    font-weight: 700;
    color: #fff;
    margin-top: 3.2rem;
  }

  .confirmation-description {
    text-align: center;
    max-width: 330px;
    margin-top: 1.4rem;
  }

  .confirmation-login-button {
    width: 180px;
    background: ${theme.secondary};
    color: #fff;
    height: 5.6rem;
    border: none;
    border-radius: 0.8rem;
    margin-top: 6rem;
    cursor: pointer;
    transition: 0.8s all ease;
  }

  .confirmation-login-button:hover {
    background: ${theme.secondaryDark};
  }

  .confirmation-login-button:focus {
    background: ${theme.primary};
  }

  @media (min-width: 1100px) {
    .confirmation-background-img {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 0;
    }

    .confirmation-background-vertical-img {
      display: none;
    }

    #page-confirmation-content {
      margin-bottom: 10vh;
    }

    .confirmation-title {
      margin-top: 4.8rem;
    }

    .confirmation-description {
      margin-top: 2.8rem;
    }

    .confirmation-login-button {
      margin-top: 8rem;
    }
  }
`
