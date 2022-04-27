import React from 'react'
import PropTypes from 'prop-types'
import { translate as t } from '~utils/functions'

import Wrapper from '~components/Wrapper'

/**
 * ConversationWrapper
 * @component
 *
 */
function ConversationWrapper(props) {
  const { username, ...rest } = props
  return (
    <Wrapper
      secondary
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        borderRadius: '4px',
        padding: '1em',
      }}>
      <Wrapper style={{}}>
        {t`CONVERSATION_LIST`}:&nbsp;{username}
      </Wrapper>
      <Wrapper
        style={{
          padding: '1em',
          display: 'flex',
          flexDirection: 'column',
          gridRowGap: '0.5em',
        }}
        {...rest}
      />
    </Wrapper>
  )
}
ConversationWrapper.defaultProps = {
  username: '',
}
ConversationWrapper.propTypes = {
  username: PropTypes.string,
}

export default ConversationWrapper
