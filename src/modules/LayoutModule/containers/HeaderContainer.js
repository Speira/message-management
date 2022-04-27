import React from 'react'
import { useAuth } from '~contexts/AuthContext'
import constants from '~/utils/constants'

import {
  BrandLink,
  HeaderWrapper,
  HomeLink,
  LogoutLink,
  NavWrapper,
} from '~LayoutModule/components'

const { DEFAULT } = constants.PATHS

/**
 * HeaderContainer
 * @container
 * @desc ::: Header of the whole App
 *
 */
function HeaderContainer() {
  const { isAuthenticated, logout } = useAuth()
  const disconnect = (e) => {
    e.preventDefault()
    logout()
  }
  return (
    <HeaderWrapper>
      <BrandLink to={DEFAULT} />
      <NavWrapper>
        <HomeLink to={DEFAULT} isNav isStrictMatch />
        {isAuthenticated && <LogoutLink onClick={disconnect} />}
      </NavWrapper>
    </HeaderWrapper>
  )
}

export default HeaderContainer
