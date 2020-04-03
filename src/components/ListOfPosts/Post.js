import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import DeleteIcon from '@material-ui/icons/Delete'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import { red } from '@material-ui/core/colors'
import { toggleLike, removePost } from '../../store/actions'
import { theme } from '../../config/theme'
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
    <ListItemIcon>
      <IconButton edge="start" onClick={ () => toggleLike(post.localIndex) }>
        {
          post.isLiked
            ? <FavoriteIcon style={{ color: red[900] }} />
            : <FavoriteBorderIcon />
        }
      </IconButton>
    </ListItemIcon>

    <ListItemIcon>
      <IconButton edge="start" onClick={ () => removePost(post.localIndex) }>
        <DeleteIcon />
      </IconButton>
    </ListItemIcon>

    <a href={ getFullLink(post) } target="_blank" rel="noopener noreferrer">
      <ListItemText primary={ post.title } />
      { post.index }
    </a>
  </ListEntry>
)

Post.propTypes = {
  post: PropTypes.object.isRequired,
  toggleLike: PropTypes.func.isRequired,
  removePost: PropTypes.func.isRequired,
}

export default connect(null, actionCreators)(Post)
