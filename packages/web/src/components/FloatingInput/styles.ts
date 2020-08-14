import styled from 'styled-components'
import theme from '../../assets/styles/theme'

export const Container = styled.div`
  .floating-input-block {
    position: relative;
  }

  .floating-input-block input {
    display: block;
    width: 100%;
    height: 6.4rem;
    background: ${theme.inputBackground};
    border: 1px solid ${theme.lineInWhite};
    color: ${theme.textBase};
    outline: 0;
    padding: 1.6rem 1.6rem 0 1.6rem;
    font: 1.6rem Archivo;
  }

  .floating-input-top {
    border-radius: 0.8rem 0.8rem 0 0;
  }

  .floating-input-bottom {
    border-radius: 0 0 0.8rem 0.8rem;
  }

  .floating-input-block::before {
    width: 2px;
    height: 0px;
    content: '';
    background: ${theme.primaryLight};
    position: absolute;
    left: 0;
    top: 1rem;
    bottom: 1rem;
    transition: height 0.3s;
  }

  .floating-input-block:focus-within::before {
    height: calc(100% - 16px);
  }

  .floating-input-block label {
    color: ${theme.textInput};
    font-size: 1.6rem;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 1.6rem;
    top: 2rem;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }

  .floating-input-block input:focus ~ label,
  .floating-input-block .floating-label {
    top: 0.8rem;
    font-size: 1.4rem;
  }
`
