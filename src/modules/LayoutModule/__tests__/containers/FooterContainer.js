import React from 'react'
import { shallow } from 'enzyme'

import { FooterWrapper } from '~LayoutModule/components'
import FooterContainer from '~LayoutModule/containers/FooterContainer'

const wrapper = shallow(<FooterContainer />)

describe('render', () => {
  it('FooterContainer must be rendered', () => {
    expect(wrapper).toBeDefined()
  })
  it('FooterContainer should have wrapper', () => {
    expect(wrapper.find(FooterWrapper)).toHaveLength(1)
  })
})
