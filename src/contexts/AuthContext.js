import React from 'react'

const AuthContext = React.createContext()

/**
 * AuthProvider
 * @component
 * @context
 *
 */
function AuthProvider(props) {
  const [user, setUser] = React.useState({})
  const value = React.useMemo(
    () => ({
      user,
      isAuthenticated: !!user.id,
      /**
       * logout
       * @desc logout an user
       */
      logout() {
        setUser({})
        return Promise.resolve(true)
      },
      /**
       * signin
       * @param {Object} reqUser
       * @param {String} reqUser.name
       * @param {String} reqUser.password
       * @desc allow to auth an registered user
       */
      signin(nextUser) {
        setUser(nextUser)
        return Promise.resolve(nextUser)
      },
    }),
    [user],
  )

  return <AuthContext.Provider {...props} value={value} />
}

/**
 * useAuth
 * @context
 * @return context
 *
 */
export const useAuth = () => {
  const context = React.useContext(AuthContext)
  if (!context) throw new Error('AuthContext must be called in AuthProvider')
  return context
}

export default AuthProvider
