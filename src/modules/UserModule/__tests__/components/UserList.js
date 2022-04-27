import React from 'react'
import { shallow } from 'enzyme'
import { UserList } from '~UserModule/components'

describe('UserList', () => {
  const onClick = jest.fn()
  const wrapper = shallow(<UserList />)
  it('UserList should be defined', () => {
    expect(wrapper).toBeDefined()
  })
})
