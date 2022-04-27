import React from 'react'
import { useAPI } from '~contexts/APIContext'
import { useAuth } from '~contexts/AuthContext'
import useRouter from '~hooks/useRouter'
import constants from '~utils/constants'
import { UserInfos, UserList, UserWrapper } from '~UserModule/components'

const { PATHS } = constants

/**
 * UserListContainer
 * @component
 *
 */
function UserListContainer() {
  const { fetchUsers } = useAPI()
  const { signin, user, isAuthenticated } = useAuth()
  const { navigate } = useRouter()
  const [usersList, setUsersList] = React.useState([])

  const handleClick = async (nextUser) => {
    await signin(nextUser)
    navigate(`${PATHS.USERS}/${nextUser.id}${PATHS.CONVERSATIONS}`)
  }
  React.useEffect(() => {
    if (!isAuthenticated) {
      fetchUsers()
        .then((users) => {
          setUsersList(users)
        })
        .catch((err) => {
          console.error(err)
        })
    } else handleClick(user)
  }, [fetchUsers, isAuthenticated]) //eslint-disable-line
  return (
    <UserWrapper>
      <UserList>
        {usersList.map((item) => (
          <UserInfos
            onClick={() => handleClick(item)}
            key={item.id}
            name={item.nickname}
            id={item.id}
          />
        ))}
      </UserList>
    </UserWrapper>
  )
}

export default UserListContainer
