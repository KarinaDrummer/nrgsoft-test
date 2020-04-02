import React from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button as MuiButton } from '@material-ui/core'
import { FETCH_POST } from '../../store/types'

const
  buttonWidth = 128,

  SlidingButton = styled(MuiButton)`
    @keyframes slide {
      0% { left: 0; }
      100% { left: calc(100% - ${buttonWidth}px); }
    }

    width: ${buttonWidth}px;
    animation: slide 7s ease-in-out infinite alternate;

    &:hover {
      animation-play-state: paused;
      background-color: #6c0b2b !important;
    }
  `

const Button = ({ label, subredditID }) => {
  const dispatch = useDispatch()

  const requestPost = () => {
    dispatch({ type: FETCH_POST, subredditID })
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

export default Button
