import React from 'react'
import { shallow } from 'enzyme'
import * as AuthContext from '~contexts/AuthContext'
import HeaderContainer from '~LayoutModule/containers/HeaderContainer'

import {
  BrandLink,
  HeaderWrapper,
  HomeLink,
  LogoutLink,
  NavWrapper,
} from '~LayoutModule/components'

describe('render', () => {
  let wrapper = null
  const fn = {
    logout: jest.fn(),
  }
  beforeEach(() => {
    jest.spyOn(AuthContext, 'useAuth').mockReturnValue({
      isAuthenticated: false,
      logout: fn.logout,
    })
    wrapper = shallow(<HeaderContainer />)
  })
  it('HeaderContainer must be rendered', () => {
    expect(wrapper).toBeDefined()
  })
  it('HeaderContainer should have HomeLink', () => {
    expect(wrapper.find(HomeLink)).toHaveLength(1)
  })
  it('HeaderContainer should not have LogoutLink when not connected', () => {
    expect(wrapper.find(LogoutLink)).toHaveLength(0)
  })
})
