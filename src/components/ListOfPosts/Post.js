import React from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import DeleteIcon from '@material-ui/icons/Delete'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import { red } from '@material-ui/core/colors'
import { TOGGLE_LIKE, REMOVE_POST } from '../../store/actionTypes'
import { theme } from '../../config/theme'
import { ListItem, ListItemText, ListItemIcon, IconButton
} from '@material-ui/core'

const ListEntry = styled(ListItem)`
  &:hover { background-color: ${theme.selection}; };
  & a { color: #c1c1c1; };
`

const getFullLink = post => `https://reddit.com${post.permalink}`

const Post = ({ post }) => {
  const
    dispatch = useDispatch(),

    likePost = () => {
      dispatch({ type: TOGGLE_LIKE, localIndex: post.localIndex })
    },

    deletePost = () => {
      dispatch({ type: REMOVE_POST, localIndex: post.localIndex })
    }

  return (
    <ListEntry>
      <ListItemIcon>
        <IconButton edge="start" onClick={ likePost }>
          {
            post.isLiked
              ? <FavoriteIcon style={{ color: red[900] }} />
              : <FavoriteBorderIcon />
          }
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
