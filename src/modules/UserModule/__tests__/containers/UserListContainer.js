import React from 'react'
import { shallow } from 'enzyme'
import * as APIContext from '~contexts/APIContext'
import * as AuthContext from '~contexts/AuthContext'
import * as useRouter from '~hooks/useRouter'
import UserListContainer from '~UserModule/containers/UserListContainer'
import { UserInfos, UserList, UserWrapper } from '~UserModule/components'

describe('UserListContainer', () => {
  const fn = {
    fetchUsers: jest.fn(),
    navigate: jest.fn(),
    signin: jest.fn(),
  }
  let wrapper = null

  beforeEach(() => {
    jest.spyOn(APIContext, 'useAPI').mockReturnValue({
      fetchUsers: fn.fetchUsers,
    })
    jest.spyOn(AuthContext, 'useAuth').mockReturnValue({
      signin: fn.signin,
      user: {},
      isAuthenticated: false,
    })
    jest.spyOn(useRouter, 'default').mockReturnValue({
      navigate: fn.navigate,
    })
    wrapper = shallow(<UserListContainer />)
  })

  it('UserListContainer should be defined', () => {
    expect(wrapper).toBeDefined()
  })

  it('UserListContainer should have UserWrapper', () => {
    const userWrapper = wrapper.find(UserWrapper)
    expect(userWrapper).toBeDefined()
    expect(userWrapper).toHaveLength(1)
  })

  it('UserListContainer should have UserList', () => {
    const userList = wrapper.find(UserList)
    expect(userList).toBeDefined()
    expect(userList).toHaveLength(1)
  })

  it('UserListContainer should have UserInfos', () => {
    const userInfos = wrapper.find(UserInfos)
    expect(userInfos).toBeDefined()
    expect(userInfos).toHaveLength(0)
  })

  it('UserListContainer should have UserInfos items when the state is filled by fetchUsers', () => {
    const users = [
      { nickname: 'Test', id: 0 },
      { nickname: 'Test 2', id: 1 },
    ]
    React.useState = jest.fn().mockReturnValue([users, {}])
    wrapper = shallow(<UserListContainer />)
    const userInfos = wrapper.find(UserInfos)
    expect(userInfos).toHaveLength(2)
    expect(fn.signin).not.toHaveBeenCalled()
    userInfos.get(0).props.onClick()
    expect(fn.signin).toHaveBeenCalledWith(users[0])
  })
})
