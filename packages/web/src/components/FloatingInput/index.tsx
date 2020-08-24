import React, { InputHTMLAttributes } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

import { Container } from './styles'
import { useState } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  value: string
  top?: boolean
  bottom?: boolean
  unique?: boolean
  password?: boolean
  emailValidation?: boolean | null
}

const FloatingInput: React.FC<InputProps> = ({
  label,
  name,
  value,
  top,
  bottom,
  unique,
  password,
  emailValidation,
  ...rest
}) => {
  const [hidden, setHidden] = useState(true)

  return (
    <Container>
      <div className="floating-input-block">
        {password ? (
          <input
            className={
              top
                ? 'floating-input-top'
                : bottom
                ? 'floating-input-bottom'
                : unique
                ? 'floating-input-unique'
                : ''
            }
            value={value}
            id={name}
            type={hidden ? 'password' : 'text'}
            {...rest}
          />
        ) : (
          <input
            className={
              top
                ? 'floating-input-top'
                : bottom
                ? 'floating-input-bottom'
                : unique
                ? 'floating-input-unique'
                : ''
            }
            value={value}
            id={name}
            {...rest}
          />
        )}
        <label className={value !== '' ? 'floating-label' : ''} htmlFor={name}>
          {label}
        </label>
        {password && (
          <FontAwesomeIcon
            icon={hidden ? faEye : faEyeSlash}
            className={
              hidden
                ? 'password-visibility-icon'
                : 'password-visibility-icon-slash'
            }
            onClick={() => setHidden(!hidden)}
          />
        )}
        {emailValidation === false && (
          <FontAwesomeIcon icon={faTimes} className="validation-icon-cross" />
        )}
        {emailValidation === true && (
          <FontAwesomeIcon icon={faCheck} className="validation-icon-check" />
        )}
      </div>
    </Container>
  )
}

export default FloatingInput
