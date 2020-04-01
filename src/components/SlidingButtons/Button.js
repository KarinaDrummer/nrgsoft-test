import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Button as MuiButton } from '@material-ui/core'

const Button = ({ label, subredditID, dispatch }) => {
  const requestPost = (subredditID) => {
    dispatch({ type: 'FETCH_POST', payload: { subredditID } })
  }

  return (
    <MuiButton
      variant="contained"
      color="primary"
      onClick={ requestPost(subredditID) }
    >
      { label }
    </MuiButton>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  subredditID: PropTypes.string.isRequired,
  dispatch: PropTypes.func,
}

connect()(Button)

export default Button