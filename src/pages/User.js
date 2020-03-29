import React from 'react'
import PropTypes from 'prop-types'
import { ProfileCard } from '~/components/*'
import { MemberList } from '~/components/MemberList'
import { mock } from '~/config/*'

const User = (props) => {
  const
    { params } = props.match,
    member = mock.members[params.id - 1]

  return (
    <div>
      <ProfileCard data={member} />
      <MemberList returnButton={true} />
    </div>
  )
}

User.propTypes = {
  match: PropTypes.object,
}

export default User
