import styled from 'styled-components'
import theme from '../../assets/styles/theme'

export const Container = styled.div`
  .login-form-container {
    max-width: 650px;
    margin: auto;
  }

  .login-form-container fieldset {
    border: none;
    padding: 0 3.2rem;
  }

  .login-form-container legend {
    font-size: 2.4rem;
    color: ${theme.textTitle};
    font-weight: 700;
    margin-bottom: 2.4rem;
  }

  .login-footer {
    display: flex;
    justify-content: space-between;
    margin-top: 2.4rem;
  }

  .login-footer .forgot-password {
    font-size: 1.4rem;
    text-decoration: none;
    color: ${theme.textInput};
  }

  .login-footer .forgot-password:hover {
    font-size: 1.4rem;
    text-decoration: underline;
  }

  .login-button {
    width: 100%;
    background: ${theme.secondary};
    color: #fff;
    height: 5.6rem;
    border: none;
    border-radius: 0.8rem;
    margin-top: 2.4rem;
    cursor: pointer;
    transition: 0.8s all ease;
  }

  .login-button:hover {
    background: ${theme.secondaryDark};
  }

  .login-button:focus {
    background: ${theme.primary};
  }

  .login-button:disabled {
    background: ${theme.buttonDisabled};
    color: ${theme.buttonDisabledText};
    cursor: auto;
  }

  @media (min-width: 1100px) {
    .login-form-container fieldset {
      width: 80%;
      max-width: 500px;
      margin: auto;
    }

    .login-form-container legend {
      font-size: 4rem;
      margin-bottom: 3.6rem;
    }

    .login-footer {
      margin-top: 3.6rem;
    }

    .login-button {
      margin-top: 4.8rem;
    }
  }
`
