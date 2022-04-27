import React from 'react'
import { useAPI } from '~contexts/APIContext'
import { useAuth } from '~contexts/AuthContext'
import useRouter from '~hooks/useRouter'
import constants from '~utils/constants'
import {
  ConversationsWrapper,
  Conversation,
} from '~CommunicationModule/components'

const { PATHS } = constants

/**
 * ConversationListContainer
 * @component
 *
 */
function ConversationListContainer() {
  const { fetchConversation } = useAPI()
  const { navigate, query } = useRouter()
  const { user, isAuthenticated } = useAuth()
  const [conversations, setConversations] = React.useState([])

  const handleClick = (conv) => {
    const destName =
      conv.recipientId === user.id
        ? conv.senderNickname
        : conv.recipientNickname
    navigate(
      `${PATHS.USERS}/${user.id}${PATHS.CONVERSATIONS}/${conv.id}/${destName}`,
    )
  }

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate(PATHS.DEFAULT)
    } else if (parseInt(query.userId, 10) === user.id) {
      fetchConversation(user.id)
        .then((data) => {
          setConversations(data)
        })
        .catch((err) => console.error(err))
    }
  }, [isAuthenticated, user, fetchConversation, query.userId, navigate])

  return (
    <ConversationsWrapper username={user.nickname}>
      {conversations
        .sort((a, b) => b.lastMessageTimestamp - a.lastMessageTimestamp)
        .map((conv) => (
          <Conversation
            key={conv.id}
            {...conv}
            onClick={() => handleClick(conv)}
            userId={user.id}
          />
        ))}
    </ConversationsWrapper>
  )
}

export default ConversationListContainer
