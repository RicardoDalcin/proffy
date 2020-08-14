import React, { InputHTMLAttributes } from 'react'

import { Container } from './styles'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
}

const Checkbox: React.FC<CheckboxProps> = ({ label, name, ...rest }) => {
  return (
    <Container>
      <div className="checkbox-block">
        <label htmlFor={name}>
          <span className="checkbox-label">{label}</span>
          <input
            type="checkbox"
            className="checkbox-input"
            id={name}
            {...rest}
          />
          <span className="checkbox-checkmark" />
        </label>
      </div>
    </Container>
  )
}

export default Checkbox
