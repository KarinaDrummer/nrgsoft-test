import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ListItem } from '@material-ui/core'
import { toggleLike, removePost } from '../../store/actions'
import { theme } from '../../config/theme'
import LikeButton from './LikeButton'
import RemoveButton from './RemoveButton'
import PostLink from './PostLink'

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
    <PostLink link={ post.permalink } title={ post.title } />
  </ListEntry>
)

Post.propTypes = {
  post: PropTypes.object.isRequired,
  toggleLike: PropTypes.func.isRequired,
  removePost: PropTypes.func.isRequired,
}

export default connect(null, actionCreators)(Post)
