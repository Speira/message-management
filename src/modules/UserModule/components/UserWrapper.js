import React from 'react'
import PropTypes from 'prop-types'
import constants from '~utils/constants'
import { useTheme } from '~contexts/ThemeContext'
import { translate as t } from '~utils/functions'

import Wrapper from '~components/Wrapper'
import Title from '~components/Title'

const { SECTION } = constants.HTML_WRAPPER_TAGS

/**
 * UserWrapper
 * @component
 *
 */
function UserWrapper(props) {
  const { children } = props
  const { colors } = useTheme()
  return (
    <Wrapper
      secondary
      style={{
        maxWidth: '97%',
        boxShadow: `-1px 1px 1px 0px ${colors.STATIC.LIGHT}, 
             1px -1px 1px 0px ${colors.STATIC.DARK} `,
        minHeight: '70vh',
        color: colors.STATIC.DARK,
        margin: 'auto',
        minWidth: '92%',
        borderRadius: '4px',
      }}
      {...props}>
      <Title>{t`USER_LIST_TITLE`}</Title>
      <Wrapper tag={SECTION}>
        <Wrapper
          style={{
            margin: '1em 2em 2em',
          }}>
          {t`USER_LIST_DESCRIPTION`}:
        </Wrapper>
        <Wrapper>{children}</Wrapper>
      </Wrapper>
    </Wrapper>
  )
}
UserWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default UserWrapper
