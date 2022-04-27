import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { PersonCircle } from '@styled-icons/bootstrap'
import Wrapper from '~components/Wrapper'

const Icon = styled(PersonCircle)`
  width: 2em;
`
const StyledWrapper = styled(Wrapper)`
  &:hover {
    background-color: ${({ theme }) => theme.COLORS.DYNAMIC.INFO};
    color: ${({ theme }) => theme.COLORS.STATIC.LIGHT};
    cursor: pointer;
    transform: scaleZ(1.1);
    transition: all 0.3s ease-out;
  }
`
/**
 * UserInfos
 * @component
 *
 */
function UserInfos(props) {
  const { name, onClick } = props
  return (
    <StyledWrapper
      tertiary
      onClick={onClick}
      style={{
        display: 'grid',
        gridTemplateColumns: '3em 6em',
        borderRadius: '1em',
        padding: '0.6em',
        alignItems: 'center',
      }}>
      <Icon />
      <Wrapper>{name}</Wrapper>
    </StyledWrapper>
  )
}
UserInfos.defaultProps = {
  name: '',
}
UserInfos.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

export default UserInfos
