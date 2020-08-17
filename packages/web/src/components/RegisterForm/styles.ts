import styled from 'styled-components'
import theme from '../../assets/styles/theme'

export const Container = styled.div`
  .register-form-container {
    max-width: 650px;
    margin: auto;
  }

  .back-icon-container {
    padding-left: 3.2rem;
  }

  .register-form-container fieldset {
    border: none;
    padding: 0 3.2rem;
  }

  .register-form-container legend {
    font-size: 2.4rem;
    color: ${theme.textTitle};
    font-weight: 700;
    margin-bottom: 2.4rem;
  }

  .register-form-container legend p {
    font-size: 1.6rem;
    max-width: 230px;
    margin: 1.4rem 0;
    font-weight: 400;
    color: ${theme.textBase};
  }

  .register-button {
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

  .register-button:hover {
    background: ${theme.secondaryDark};
  }

  .register-button:focus {
    background: ${theme.primary};
  }

  .register-button:disabled {
    background: ${theme.buttonDisabled};
    color: ${theme.buttonDisabledText};
    cursor: auto;
  }

  @media (min-width: 1100px) {
    .register-form-container fieldset {
      width: 80%;
      max-width: 500px;
      margin: auto;
    }

    .back-icon-container {
      width: 80%;
      max-width: 500px;
      margin: auto;
      margin-bottom: 10rem;
    }

    .register-form-container legend {
      font-size: 4rem;
      margin-bottom: 3.6rem;
    }

    .register-button {
      margin-top: 4.8rem;
    }
  }
`
