import React from 'react'
import { shallow } from 'enzyme'
import * as ThemeContext from '~contexts/ThemeContext'
import { UserWrapper } from '~UserModule/components'

describe('UserWrapper', () => {
  jest.spyOn(ThemeContext, 'useTheme').mockReturnValue({
    colors: { STATIC: {}, DYNAMIC: {} },
  })
  const wrapper = shallow(<UserWrapper>test</UserWrapper>)
  it('UserWrapper should be defined', () => {
    expect(wrapper).toBeDefined()
  })
})
