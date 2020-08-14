import React, { InputHTMLAttributes } from 'react'

import { Container } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  value: string
  top?: boolean
}

const FloatingInput: React.FC<InputProps> = ({
  label,
  name,
  value,
  top,
  ...rest
}) => {
  return (
    <Container>
      <div className="floating-input-block">
        <input
          className={top ? 'floating-input-top' : 'floating-input-bottom'}
          value={value}
          id={name}
          {...rest}
        />
        <label className={value !== '' ? 'floating-label' : ''} htmlFor={name}>
          {label}
        </label>
      </div>
    </Container>
  )
}

export default FloatingInput
