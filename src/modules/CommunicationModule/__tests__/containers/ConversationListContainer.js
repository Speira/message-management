import React from 'react'
import { shallow } from 'enzyme'
import * as APIContext from '~contexts/APIContext'
import * as AuthContext from '~contexts/AuthContext'
import * as useRouter from '~hooks/useRouter'
import ConversationListContainer from '~CommunicationModule/containers/ConversationListContainer'
import {
  ConversationsWrapper,
  Conversation,
} from '~CommunicationModule/components'

describe('UserWrapper', () => {
  const fn = {
    fetchConversation: jest.fn(),
    navigate: jest.fn(),
  }
  let wrapper = null
  beforeEach(() => {
    jest.spyOn(APIContext, 'useAPI').mockReturnValue({
      fetchConversation: fn.fetchConversation,
    })
    jest.spyOn(AuthContext, 'useAuth').mockReturnValue({
      user: { id: 1 },
      isAuthenticated: false,
    })
    jest.spyOn(useRouter, 'default').mockReturnValue({
      navigate: fn.navigate,
      query: {},
    })
    wrapper = shallow(<ConversationListContainer />)
  })
  it('UserWrapper should be defined', () => {
    expect(wrapper).toBeDefined()
  })
  it('UserWrapper should have ConversationsWrapper', () => {
    expect(wrapper.find(ConversationsWrapper)).toHaveLength(1)
  })
  it('UserWrapper should not have Conversations in the beginning', () => {
    expect(wrapper.find(Conversation)).toHaveLength(0)
  })
  it('UserWrapper should have Conversations after being filled', () => {
    const conversations = [
      {
        id: 1,
        recipientId: 1,
        senderNickname: 'Test 1',
        recipientNickname: 'Test 11',
        lastMessageTimestamp: 1231231233,
      },
    ]
    React.useState = jest.fn().mockReturnValue([conversations, {}])
    wrapper = shallow(<ConversationListContainer />)
    const conversation = wrapper.find(Conversation)
    expect(conversation).toHaveLength(1)
    expect(fn.navigate).not.toHaveBeenCalled()
    conversation.get(0).props.onClick()
    expect(fn.navigate).toHaveBeenCalled()
  })
})
