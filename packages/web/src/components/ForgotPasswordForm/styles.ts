import styled from 'styled-components'
import theme from '../../assets/styles/theme'

export const Container = styled.div`
  .forgot-form-container {
    max-width: 650px;
    margin: auto;
  }

  .back-icon-container {
    padding-left: 3.2rem;
  }

  .forgot-form-container fieldset {
    border: none;
    padding: 0 3.2rem;
  }

  .forgot-form-container legend {
    font-size: 2.4rem;
    color: ${theme.textTitle};
    font-weight: 700;
    margin-bottom: 2.4rem;
  }

  .forgot-form-container legend p {
    font-size: 1.6rem;
    max-width: 230px;
    margin: 1.4rem 0;
    font-weight: 400;
    color: ${theme.textBase};
  }

  .forgot-button {
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

  .forgot-button:hover {
    background: ${theme.secondaryDark};
  }

  .forgot-button:focus {
    background: ${theme.primary};
  }

  .forgot-button:disabled {
    background: ${theme.buttonDisabled};
    color: ${theme.buttonDisabledText};
    cursor: auto;
  }

  @media (min-width: 1100px) {
    .forgot-form-container fieldset {
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

    .forgot-form-container legend {
      font-size: 4rem;
      margin-bottom: 3.6rem;
      max-width: 350px;
    }

    .forgot-form-container legend p {
      max-width: 100%;
    }

    .forgot-button {
      margin-top: 4.8rem;
    }
  }
`
