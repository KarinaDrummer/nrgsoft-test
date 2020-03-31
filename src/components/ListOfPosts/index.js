import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { map, addIndex } from 'ramda'
import { Box, List } from '@material-ui/core'
import { theme } from '../../config/theme'
import Post from './Post'

const StyledBox = styled(Box)`
  margin: 0 24px;
  width: calc(100% - 48px);
  height: calc(100% - 312px);
  overflow-x: auto;
  background-color: ${theme.paperBg};
`

const renderEntry = (entry, index) => (<Post key={index} post={entry}/>)

const ListOfPosts = (props) => {
  return (
    <StyledBox boxShadow={1}>
      <List>
        { addIndex(map)(renderEntry, props.posts) }
      </List>
    </StyledBox>
  )
}

ListOfPosts.propTypes = {
  posts: PropTypes.array,
}

export default ListOfPosts
