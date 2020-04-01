import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import { theme } from '../../config/theme'

const ListEntry = styled(ListItem)`
  &:hover {
    background-color: ${theme.selection};
  };
  & a {
    color: #c1c1c1;
  };
`

const Post = ({ post }) => {
  const title = post.data.title
  const url = `https://reddit.com${post.data.permalink}`
  const liked = false

  return (
    <ListEntry>

      <ListItemIcon>
        <IconButton edge="start">
          { liked ? <FavoriteIcon /> : <FavoriteBorderIcon /> }
        </IconButton>
      </ListItemIcon>

      <ListItemIcon>
        <IconButton edge="start">
          <DeleteIcon />
        </IconButton>
      </ListItemIcon>

      <a href={url} target="_blank" rel="noopener noreferrer">
        <ListItemText primary={title} />
      </a>

    </ListEntry>
  )
}

Post.propTypes = {
  post: PropTypes.object,
}

export default Post
