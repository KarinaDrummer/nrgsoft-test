import React from 'react'
import PropTypes from 'prop-types'
import { ListItemText } from '@material-ui/core'

const PostLink = ({ link, title }) => (
  <a
    href={ `https://reddit.com${link}` }
    target="_blank"
    rel="noopener noreferrer"
  >
    <ListItemText primary={ title } />
  </a>
)

PostLink.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default PostLink
