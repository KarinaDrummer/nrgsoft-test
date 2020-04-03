import React from 'react'
import PropTypes from 'prop-types'
import DeleteIcon from '@material-ui/icons/Delete'
import { ListItemIcon, IconButton } from '@material-ui/core'

const RemoveButton = ({ action }) => (
  <ListItemIcon>
    <IconButton edge="start" onClick={ action }>
      <DeleteIcon />
    </IconButton>
  </ListItemIcon>
)

RemoveButton.propTypes = {
  action: PropTypes.func.isRequired,
}

export default RemoveButton
