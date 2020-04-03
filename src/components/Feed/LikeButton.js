import React from 'react'
import PropTypes from 'prop-types'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import { red } from '@material-ui/core/colors'
import { ListItemIcon, IconButton } from '@material-ui/core'

const LikeButton = ({ active, action }) => (
  <ListItemIcon>
    <IconButton edge="start" onClick={ action }>
      {
        active
          ? <FavoriteIcon style={{ color: red[900] }} />
          : <FavoriteBorderIcon />
      }
    </IconButton>
  </ListItemIcon>
)

LikeButton.propTypes = {
  active: PropTypes.bool.isRequired,
  action: PropTypes.func.isRequired,
}

export default LikeButton
