import React from 'react'
import PropTypes from 'prop-types'
import constants from '~utils/constants'
import Wrapper from '~components/Wrapper'

const { STATUS } = constants

/**
 * Message
 * @component
 *
 */
function Message(props) {
  const { body, destName, isDest } = props
  return (
    <Wrapper>
      <Wrapper>{isDest ? destName : ''} </Wrapper>
      <Wrapper
        status={isDest ? '' : STATUS.INFO}
        tertiary
        style={{
          width: '20em',
          borderRadius: '8px',
          padding: '0.5em',
          float: isDest ? 'left' : 'right',
          margin: '0.2em 0',
        }}>
        {body}
      </Wrapper>
    </Wrapper>
  )
}
Message.defaultProps = {}
Message.propTypes = {
  isDest: PropTypes.bool.isRequired,
  destName: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

export default Message
