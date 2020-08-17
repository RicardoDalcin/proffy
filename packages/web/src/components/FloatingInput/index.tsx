import React, { InputHTMLAttributes } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'

import { Container } from './styles'
import { useState } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  value: string
  top?: boolean
  bottom?: boolean
  password?: boolean
}

const FloatingInput: React.FC<InputProps> = ({
  label,
  name,
  value,
  top,
  bottom,
  password,
  ...rest
}) => {
  const [hidden, setHidden] = useState(true)

  const styleTopOrBottom = () => {
    if (top) {
      return 'floting-input-top'
    } else if (bottom) {
      return 'floating-input-bottom'
    } else {
      return ''
    }
  }

  return (
    <Container>
      <div className="floating-input-block">
        {password ? (
          <input
            className={
              top ? 'floating-input-top' : bottom ? 'floating-input-bottom' : ''
            }
            value={value}
            id={name}
            type={hidden ? 'password' : 'text'}
            {...rest}
          />
        ) : (
          <input
            className={
              top ? 'floating-input-top' : bottom ? 'floating-input-bottom' : ''
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
      </div>
    </Container>
  )
}

export default FloatingInput
