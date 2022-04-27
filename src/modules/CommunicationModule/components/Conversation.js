import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Chat } from '@styled-icons/bootstrap'
import { useTheme } from '~contexts/ThemeContext'
import { formatDate, getDateFromTimestamp } from '~utils/functions'

import Wrapper from '~components/Wrapper'

const Icon = styled(Chat)`
  width: 2em;
`
const Conv = styled(Wrapper)`
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.COLORS.DYNAMIC.INFO};
    color: ${({ theme }) => theme.COLORS.STATIC.LIGHT};
    transition: all 0.3s ease-out;
  }
`

/**
 * Conversation
 * @component
 *
 */
function Conversation(props) {
  const {
    lastMessageTimestamp,
    onClick,
    recipientId,
    recipientNickname,
    senderNickname,
    userId,
  } = props
  const { colors } = useTheme()
  const isRecipient = recipientId === userId
  const name = isRecipient ? senderNickname : recipientNickname
  const date = getDateFromTimestamp(lastMessageTimestamp)
  return (
    <Conv
      onClick={onClick}
      tertiary={isRecipient}
      quaternary={!isRecipient}
      style={{
        alignItems: 'center',
        borderRadius: '4px',
        boxShadow: `-1px 1px 2px -1px ${colors.DYNAMIC.INFO}`,
        color: isRecipient ? colors.STATIC.DARK : colors.STATIC.LIGHT,
        display: 'grid',
        gridTemplateColumns: '3em 20em',
        padding: '0.5em',
      }}>
      <Icon />
      <Wrapper style={{ display: 'grid', gridTemplateRows: ' 1em 1em' }}>
        <Wrapper>{name}</Wrapper>
        <Wrapper>{formatDate(date)} </Wrapper>
      </Wrapper>
    </Conv>
  )
}
Conversation.defaultProps = {
  userId: null,
}
Conversation.propTypes = {
  lastMessageTimestamp: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  recipientId: PropTypes.number.isRequired,
  recipientNickname: PropTypes.string.isRequired,
  senderNickname: PropTypes.string.isRequired,
  userId: PropTypes.number,
}

export default Conversation
