import React from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import DeleteIcon from '@material-ui/icons/Delete'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import { REMOVE_POST } from '../../store/types'
import { theme } from '../../config/theme'
import { ListItem, ListItemText, ListItemIcon, IconButton
} from '@material-ui/core'

const ListEntry = styled(ListItem)`
  &:hover {
    background-color: ${theme.selection};
  };
  & a {
    color: #c1c1c1;
  };
`

const
  liked = false,
  getFullLink = post => `https://reddit.com${post.permalink}`

const Post = ({ post }) => {
  const
    dispatch = useDispatch(),

    deletePost = () => {
      dispatch({ type: REMOVE_POST, index: post.localIndex })
    }

  return (
    <ListEntry>
      <ListItemIcon>
        <IconButton edge="start">
          { liked ? <FavoriteIcon /> : <FavoriteBorderIcon /> }
        </IconButton>
      </ListItemIcon>

      <ListItemIcon>
        <IconButton edge="start" onClick={ deletePost }>
          <DeleteIcon />
        </IconButton>
      </ListItemIcon>

      <a href={ getFullLink(post) } target="_blank" rel="noopener noreferrer">
        <ListItemText primary={ post.title } />
        { post.index }
      </a>
    </ListEntry>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
}

export default Post
