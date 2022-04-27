import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import constants from '~utils/constants'

import Contexts from '~contexts'

import { BodyContainer, FooterContainer, HeaderContainer } from '~LayoutModule'
import ErrorModule, { NotFoundContainer } from '~ErrorModule'
import { UserListContainer } from '~UserModule'
import {
  ConversationListContainer,
  MessageListContainer,
} from '~CommunicationModule'

const { PATHS } = constants

/**
 *
 * App
 *
 */
function App() {
  return (
    <Contexts>
      <Router>
        <ErrorModule>
          <BodyContainer>
            <HeaderContainer />
            <Routes>
              <Route path={PATHS.DEFAULT} element={<UserListContainer />} />
              <Route
                path={`${PATHS.USERS}/:userId${PATHS.CONVERSATIONS}`}
                element={<ConversationListContainer />}
              />
              <Route
                path={`${PATHS.USERS}/:userId${PATHS.CONVERSATIONS}/:conversationId/:destName`}
                element={<MessageListContainer />}
              />
              <Route path={PATHS.ANY} element={<NotFoundContainer />} />
            </Routes>
            <FooterContainer />
          </BodyContainer>
        </ErrorModule>
      </Router>
    </Contexts>
  )
}

export default App
