import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { getStatusColor } from '~utils/functions'

const H1 = styled.h1`
  font-size: ${({ size }) => size || '2.4em'};
`
const H2 = styled.h2`
  font-size: ${({ size }) => size || '1.9em'};
`
const H3 = styled.h3`
  font-size: ${({ size }) => size || '1.3em'};
`
const H4 = styled.h4`
  font-size: ${({ size }) => size || '1.1em'};
`

/**
 * TitleElement
 * @component
 *
 */
function TitleElement(props) {
  const { type, ...rest } = props
  let Title = H1
  if (type === 'h2') Title = H2
  if (type === 'h3') Title = H3
  if (type === 'h4') Title = H4
  return <Title {...rest} />
}
TitleElement.propTypes = { type: PropTypes.string.isRequired }

/**
 * BaseTitle
 * @component
 *
 */
const BaseTitle = styled(TitleElement).attrs((props) => {
  const { style = {}, status, theme } = props
  if (status) style.color = getStatusColor({ theme, status })
  return {
    style,
  }
})`
  margin: ${({ margin }) => margin || '0 0 0.3em'};
  padding: ${({ padding }) => padding || '0.3em'};
  &.inline {
    display: inline-block;
  }
  &.left {
    text-align: left;
  }
  &.center {
    text-align: center;
  }
  &.right {
    text-align: right;
  }
  &.light {
    color: ${({ theme }) => theme.COLORS.STATIC.LIGHT};
    text-shadow: 1px 1px 0px ${({ theme }) => theme.COLORS.STATIC.DARK};
  }
`

export default BaseTitle
