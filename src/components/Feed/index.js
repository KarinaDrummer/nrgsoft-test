import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { map, addIndex } from 'ramda'
import { Box, List } from '@material-ui/core'
import { theme } from '../../config/theme'
import Post from './Post'

const
  mapWithIndex = addIndex(map),

  renderListItem = (entry, index) => (
    <Post key={ index } post={ entry }/>
  )

const StyledBox = styled(Box)`
  margin: 0 24px 24px;
  height: 100%;
  overflow-x: auto;
  background-color: ${theme.paperBg};
`

const Feed = () => {
  const posts = useSelector(
    state => Object.values(state.posts.registry)
  )

  return (
    <StyledBox boxShadow={1}>
      <List>
        { mapWithIndex(renderListItem, posts) }
      </List>
    </StyledBox>
  )
}

Feed.propTypes = {
  posts: PropTypes.array,
}

export default Feed
