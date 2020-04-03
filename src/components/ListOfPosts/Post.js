import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import DeleteIcon from '@material-ui/icons/Delete'
import { toggleLike, removePost } from '../../store/actions'
import { theme } from '../../config/theme'
import LikeButton from './LikeButton'
import { ListItem, ListItemText, ListItemIcon, IconButton
} from '@material-ui/core'

const actionCreators = {
  toggleLike, removePost,
}

const getFullLink = post => `https://reddit.com${post.permalink}`

const ListEntry = styled(ListItem)`
  &:hover { background-color: ${theme.selection}; };
  & a { color: #c1c1c1; };
`

const Post = ({ post, toggleLike, removePost }) => (
  <ListEntry>
    <LikeButton
      active={ post.isLiked }
      action={ () => toggleLike(post.localIndex) }
    />

    <ListItemIcon>
      <IconButton edge="start" onClick={ () => removePost(post.localIndex) }>
        <DeleteIcon />
      </IconButton>
    </ListItemIcon>

    <a href={ getFullLink(post) } target="_blank" rel="noopener noreferrer">
      <ListItemText primary={ post.title } />
    </a>
  </ListEntry>
)

Post.propTypes = {
  post: PropTypes.object.isRequired,
  toggleLike: PropTypes.func.isRequired,
  removePost: PropTypes.func.isRequired,
}

export default connect(null, actionCreators)(Post)
