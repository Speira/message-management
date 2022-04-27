import React from 'react'
import axios from 'axios'
import constants from '~utils/constants'

const { API } = constants

const APIContext = React.createContext()

/**
 * APIProvider
 * @component
 * @context
 *
 */
function APIProvider(props) {
  const value = React.useMemo(
    () => ({
      fetchUsers() {
        return new Promise((resolve, reject) => {
          try {
            fetch(`${API.PROXY}${API.URLS.USERS}`)
              .then((response) => response.json())
              .then((response) => {
                return resolve(response)
              })
              .catch((err) => reject(err))
          } catch (err) {
            reject(err)
          }
        })
      },
      fetchConversation(userId) {
        return new Promise((resolve, reject) => {
          try {
            fetch(`${API.PROXY}${API.URLS.CONVERSATIONS}/${userId}`)
              .then((response) => response.json())
              .then((response) => {
                return resolve(response)
              })
              .catch((err) => reject(err))
          } catch (err) {
            reject(err)
          }
        })
      },
      fetchMessages(convId) {
        return new Promise((resolve, reject) => {
          try {
            fetch(`${API.PROXY}${API.URLS.MESSAGES}/${convId}`)
              .then((response) => response.json())
              .then((response) => {
                return resolve(response)
              })
              .catch((err) => reject(err))
          } catch (err) {
            reject(err)
          }
        })
      },
      sendMessage({ message, conversationId, authorId }) {
        return new Promise((resolve, reject) => {
          axios
            .post(`${API.PROXY}${API.URLS.MESSAGES}/${conversationId}`, {
              body: message,
              conversationId,
              authorId,
            })
            .then((response) => {
              resolve(response)
            })
            .catch((error) => {
              reject(error)
            })
        })
      },
    }),
    [],
  )

  return <APIContext.Provider {...props} value={value} />
}

/**
 * useAPI
 * @return context
 *
 */
export const useAPI = () => {
  const context = React.useContext(APIContext)
  if (!context) throw new Error('APIContext must be called in APIProvider')
  return context
}
export default APIProvider
