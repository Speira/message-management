import React from 'react'

import Wrapper from '~components/Wrapper'

/**
 * UserList
 * @component
 *
 */
function UserList(props) {
  return (
    <Wrapper
      style={{
        display: 'flex',
        alignItems: 'center',
        gridRowGap: '0.5em',
        justifyContent: 'center',
        gridColumnGap: '0.8em',
        xs: {
          flexDirection: 'column',
        },
      }}
      {...props}
    />
  )
}

export default UserList
