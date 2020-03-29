import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'

const
  StyledCard = styled(Card)`
    display: flex;
    max-width: 320px;
    margin-bottom: 12px;
  `,

  Avatar = styled(CardMedia)`
    width: ${props => props.size};
    min-width: ${props => props.size};
    height: ${props => props.size};
    min-height: ${props => props.size};
    border-radius: 4px;
    @media screen and (max-width: 240px) {
      display: none !important;
    };
  `

const ProfileCard = (props) => {
  const member = props.data

  return (
    <StyledCard>
      <div>
        <CardContent>
          <Typography component="h5" variant="h5">
            {member.firstname} {member.secondname}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {member.position}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {member.address}
          </Typography>
        </CardContent>
      </div>
      <Avatar size="120px" image={member.avatar} />
    </StyledCard>
  )
}

ProfileCard.propTypes = {
  data: PropTypes.object,
}

export default ProfileCard
