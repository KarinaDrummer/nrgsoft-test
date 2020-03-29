import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { map } from 'ramda'
import { theme } from '~/config/theme'
import { mock } from '~/config/*'
import { Box, List } from '@material-ui/core'
import { Member, Subheader } from './*'

const StyledBox = styled(Box)`
  @media screen and (min-width: 240px) and (max-width: 320px) {
    min-width: 240px;
  };
  @media screen and (min-width: 320px) {
    width: 320px;
  };
  background-color: ${theme.paperBg};
`

const renderEntry = entry => {
  return (<Member key={entry.id} member={entry}/>)
}

export const MemberList = (props) => {
  const { returnButton } = props

  return (
    <StyledBox boxShadow={1}>
      <List subheader={
        <Subheader returnButton={returnButton}/>
      }>
        { map(renderEntry, mock.members) }
      </List>
    </StyledBox>
  )
}

MemberList.propTypes = {
  returnButton: PropTypes.bool,
}