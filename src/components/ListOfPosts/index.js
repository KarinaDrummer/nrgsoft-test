import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { map, addIndex } from 'ramda'
import { Box, List } from '@material-ui/core'
import { theme } from '../../config/theme'
import Post from './Post'

const StyledBox = styled(Box)`
  margin: 0 24px 24px;
  height: 100%;
  overflow-x: auto;
  background-color: ${theme.paperBg};
`

const mapStateToProps = (state) => ({
  posts: Object.values(state.posts.registry),
})

const
  mapWithIndex = addIndex(map),

  renderListItem = (entry, index) => (
    <Post key={ index } post={ entry }/>
  )

const ListOfPosts = ({ posts }) => {
  return (
    <StyledBox boxShadow={1}>
      <List>
        { mapWithIndex(renderListItem, posts) }
      </List>
    </StyledBox>
  )
}

ListOfPosts.propTypes = {
  posts: PropTypes.array,
}

export default connect(mapStateToProps)(ListOfPosts)
