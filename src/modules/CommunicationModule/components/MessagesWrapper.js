import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '~contexts/ThemeContext'

import Wrapper from '~components/Wrapper'
import Input from '~components/Input'

/**
 * MessagesWrapper
 * @component
 *
 */
function MessagesWrapper(props) {
  const { destName, onSend, ...rest } = props
  const { colors } = useTheme()
  const [message, setMessage] = React.useState('')
  const handleKeyPress = (e) => {
    if (e.code === 'Enter') {
      onSend(message)
      setMessage('')
    }
  }
  return (
    <Wrapper
      secondary
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        borderRadius: '4px',
        padding: '1em',
        boxShadow: `0px 0px 1px 1px ${colors.STATIC.DARK} inset`,
      }}>
      <Wrapper style={{ margin: '0 1em 2em', fontWeight: 'bold' }}>
        {destName}
      </Wrapper>
      <Wrapper
        style={{
          position: 'relative',
          width: '30em',
          maxWidth: '90vw',
          maxHeight: '20em',
          padding: '1em',
          display: 'flex',
          flexDirection: 'column',
          gridRowGap: '1em',
          overflowY: 'auto',
        }}
        {...rest}
      />
      <Wrapper style={{ width: '100%' }}>
        <Input
          width="100%"
          onKeyPress={handleKeyPress}
          value={message}
          onChange={setMessage}
        />
      </Wrapper>
    </Wrapper>
  )
}
MessagesWrapper.defaultProps = {
  destName: '',
}
MessagesWrapper.propTypes = {
  destName: PropTypes.string,
  onSend: PropTypes.func.isRequired,
}

export default MessagesWrapper
