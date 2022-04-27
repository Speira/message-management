import React from 'react'
import { shallow } from 'enzyme'
import { UserInfos } from '~UserModule/components'

describe('UserInfos', () => {
  const onClick = jest.fn()
  const wrapper = shallow(<UserInfos onClick={onClick} name="test" />)
  it('UserInfos should be defined', () => {
    expect(wrapper).toBeDefined()
  })
  it('UserInfos should display the name', () => {
    expect(wrapper.findWhere((comp) => comp.text() === 'test')).toHaveLength(1)
  })
})
