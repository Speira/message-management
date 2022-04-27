import React from 'react'
import { useAPI } from '~contexts/APIContext'
import { useAuth } from '~contexts/AuthContext'
import useRouter from '~hooks/useRouter'
import constants from '~utils/constants'
import { MessagesWrapper, Message } from '~CommunicationModule/components'

const { PATHS } = constants

/**
 * ConversationListContainer
 * @component
 *
 */
function MessageListContainer() {
  const { fetchMessages, sendMessage } = useAPI()
  const { navigate, query } = useRouter()
  const { conversationId: convId, userId, destName } = query
  const { user, isAuthenticated } = useAuth()
  const [messages, setMessages] = React.useState([])

  const sendFetchRequest = React.useCallback(() => {
    fetchMessages(convId)
      .then((data) => {
        setMessages(data)
      })
      .catch((err) => console.error(err))
  }, [convId, fetchMessages])

  const onSendMessage = (message) => {
    sendMessage({
      message,
      conversationId: convId,
      authorId: user.id,
      timestamp: new Date().getTime(),
    })
      .then(() => {
        setMessages((old) => [
          ...old,
          {
            authorId: user.id,
            body: message,
            timestamp: new Date().getTime(),
            conversationId: convId,
          },
        ])
      })
      .catch((err) => console.error(err))
  }

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate(PATHS.DEFAULT)
    } else if (parseInt(userId, 10) === user.id) {
      sendFetchRequest()
    }
  }, [isAuthenticated, user, sendFetchRequest, navigate, userId])

  return (
    <MessagesWrapper destName={destName} onSend={onSendMessage}>
      {messages
        .sort((a, b) => a.timestamp - b.timestamp)
        .map((message) => (
          <Message
            key={message.id}
            isDest={message.authorId !== user.id}
            destName={destName}
            {...message}
          />
        ))}
    </MessagesWrapper>
  )
}

export default MessageListContainer
