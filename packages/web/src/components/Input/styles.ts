import styled from 'styled-components'
import theme from '../../assets/styles/theme'

export const Container = styled.div`
  .input-block {
    position: relative;
  }

  .input-block + .input-block {
    margin-top: 1.4rem;
  }

  .input-block label {
    font-size: 1.4rem;
  }

  .input-block input {
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: ${theme.inputBackground};
    border: 1px solid ${theme.lineInWhite};
    outline: 0;
    padding: 0 1.6rem;
    font: 1.6rem Archivo;
  }

  .input-block::after {
    width: 0rem;
    height: 2px;
    content: '';
    background: ${theme.primaryLight};
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0;
    transition: width 0.2s;
  }

  .input-block:focus-within::after {
    width: calc(100% - 3.2rem);
  }
`
