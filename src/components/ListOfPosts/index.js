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

const mapStateToProps = (state) => {
  return {
    posts: state.posts.list
  }
}

const renderEntry = (entry, index) => (
  <Post key={index} post={entry}/>
)

const ListOfPosts = ({ posts }) => {
  return (
    <StyledBox boxShadow={1}>
      <List>
        { addIndex(map)(renderEntry, posts) }
      </List>
    </StyledBox>
  )
}

ListOfPosts.propTypes = {
  posts: PropTypes.array,
}

export default connect(mapStateToProps)(ListOfPosts)
