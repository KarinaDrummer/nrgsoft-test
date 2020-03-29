import React from 'react'
import { Grid } from '@material-ui/core'
import { MemberList } from '~/components/MemberList'

const Home = () =>
  <Grid item xs sm={4} md={6} lg={6}>
    <MemberList />
  </Grid>

export default Home
