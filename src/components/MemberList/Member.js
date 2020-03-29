import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { theme } from '~/config/theme'
import { Avatar, ListItem, ListItemAvatar, ListItemText }
  from '@material-ui/core'

const RouterLink = styled(Link)`
  color: white;
  &:hover {
    background-color: ${theme.selection};
  }
`

const Member = (props) => {
  const
    member = props.member,
    url = `/members/${member.id}`,
    name = `${member.firstname} ${member.secondname}`,
    position = member.position,
    avatar = member.avatar

  return (
    <ListItem component={RouterLink} to={url}>
      <ListItemAvatar>
        <Avatar alt={name} src={avatar} />
      </ListItemAvatar>
      <ListItemText primary={name} secondary={position} />
    </ListItem>
  )
}

Member.propTypes = {
  member: PropTypes.object,
}

export default Member
