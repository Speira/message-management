import React from 'react'
import PropTypes from 'prop-types'

import useRouter from '~hooks/useRouter'
import constants from '~utils/constants'
import Link from '~components/Link'

const { STATUS } = constants

/**
 * LayoutLink.
 * @component
 *
 * @param {} props
 */
function LayoutLink(props) {
  const { isNav, isStrictMatch, label, size, to, ...rest } = props
  const { isURLMatching } = useRouter({ to, isStrictMatch })
  return (
    <Link
      tertiary
      status={isNav && isURLMatching ? STATUS.INFO : ''}
      to={to}
      size={size}
      {...rest}>
      {label}
    </Link>
  )
}
LayoutLink.defaultProps = {
  isNav: false,
  isStrictMatch: false,
  size: '',
  to: '',
}
LayoutLink.propTypes = {
  isNav: PropTypes.bool,
  isStrictMatch: PropTypes.bool,
  label: PropTypes.string.isRequired,
  size: PropTypes.string,
  to: PropTypes.string,
}
export default LayoutLink
