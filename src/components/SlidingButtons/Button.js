import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button as MuiButton } from '@material-ui/core'
import { fetchPost } from '../../store/actions'

const actionCreators = {
  fetchPost,
}

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

const Button = ({ label, subredditID, fetchPost }) => (
  <SlidingButton
    onClick={ () => fetchPost(subredditID) }
    variant="contained" color="primary"
  >
    { label }
  </SlidingButton>
)

Button.propTypes = {
  label: PropTypes.string.isRequired,
  subredditID: PropTypes.string.isRequired,
  fetchPost: PropTypes.func.isRequired,
}

export default connect(null, actionCreators)(Button)
