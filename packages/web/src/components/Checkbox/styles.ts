import styled from 'styled-components'
import theme from '../../assets/styles/theme'

export const Container = styled.div`
  .checkbox-block input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkbox-label {
    display: block;
    position: absolute;
    top: 3px;
    width: 90px;
  }

  .checkbox-block label {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    color: ${theme.textInput};
    display: block;
    position: relative;
    padding-left: 4rem;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .checkbox-block .checkbox-checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 2.4rem;
    width: 2.4rem;
    background-color: #fff;
    border-radius: 0.8rem;
    display: block;
  }

  .checkbox-block input:checked ~ .checkbox-checkmark {
    background-color: ${theme.secondary};
  }

  .checkbox-checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  .checkbox-block input:checked ~ .checkbox-checkmark:after {
    display: block;
  }

  /* Style the checkbox-checkmark/indicator */
  .checkbox-block .checkbox-checkmark:after {
    left: 8px;
    top: 4px;
    width: 4px;
    height: 9px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`
