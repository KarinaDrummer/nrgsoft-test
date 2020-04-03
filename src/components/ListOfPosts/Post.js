import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ListItem, ListItemText } from '@material-ui/core'
import { toggleLike, removePost } from '../../store/actions'
import { theme } from '../../config/theme'
import LikeButton from './LikeButton'
import RemoveButton from './RemoveButton'

const actionCreators = {
  toggleLike, removePost,
}

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

    <RemoveButton action={ () => removePost(post.localIndex) } />

    <a
      href={ `https://reddit.com${post.permalink}` }
      target="_blank" rel="noopener noreferrer"
    >
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
