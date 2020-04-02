/* eslint no-unused-vars: "warn" */

import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button as MuiButton } from '@material-ui/core'
import { FETCH_POST } from '../../store/types'

const SlidingButton = styled(MuiButton)`
  @keyframes slide {
    0% { left: 0; }
    100% { left: 87%; }
  }

  width: 128px;
  animation: slide 7s ease-in-out infinite alternate;

  &:hover {
    animation-play-state: paused;
    background-color: #6c0b2b !important;
  }
`

const Button = ({ label, subredditID, dispatch }) => {
  console.log(dispatch)

  const requestPost = () => {
    // dispatch({ type: FETCH_POST, subredditID })
  }

  return (
    <SlidingButton
      variant="contained"
      color="primary"
      onClick={ requestPost }
    >
      { label }
    </SlidingButton>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  subredditID: PropTypes.string.isRequired,
  dispatch: PropTypes.func,
}

connect()(Button)

export default Button