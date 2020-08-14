import styled from 'styled-components'
import theme from '../../assets/styles/theme'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  color: ${theme.textInPrimary};
  background: ${theme.primary};

  #page-landing-content {
    width: 100vw;
    max-width: 100vw;
  }

  .logo-container {
    text-align: center;
    height: 35vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
  }

  .logo-wrapper {
    z-index: 10;
  }

  .logo-container .background-shapes {
    position: fixed;
    height: 35vh;
    z-index: 0;
  }

  .logo-container .logo-image {
    height: 7rem;
  }

  .logo-container h2 {
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 2.4rem;
    margin-top: 0.8rem;
    max-width: 200px;
    text-align: left;
  }

  .login-container {
    height: 65vh;
    background: ${theme.background};
    padding-top: 5.4rem;
    z-index: 10;
  }

  @media (min-width: 1100px) {
    #page-landing-content {
      display: flex;
      flex-direction: row;
      max-width: 100vw;
    }

    .logo-container,
    .login-container {
      height: 100vh;
      width: 50vw;
    }

    .login-container {
      padding-top: 28rem;
    }

    .logo-container .background-shapes {
      position: absolute;
      width: 80vw;
      height: 60vh;
    }

    .logo-container .logo-image {
      height: 10rem;
    }

    .logo-container h2 {
      font-size: 2.4rem;
      line-height: 2.4rem;
      max-width: 300px;
    }
  }
`
