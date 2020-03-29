import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Icon, IconButton, ListSubheader } from '@material-ui/core'

const
  Wrapper = styled.div`
    display: flex;
  `,

  ReturnButton = () =>
    <IconButton component={Link} to="/" aria-label="back">
      <Icon>arrow_back</Icon>
    </IconButton>

const Subheader = (props) => {
  return (
    <Wrapper>
      { props.returnButton && <ReturnButton/> }
      <ListSubheader component="div">
        Company members
      </ListSubheader>
    </Wrapper>
  )
}

Subheader.propTypes = {
  returnButton: PropTypes.bool,
}

export default Subheader
