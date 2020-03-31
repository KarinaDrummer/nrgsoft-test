import React from 'react'
import styled from 'styled-components'
import { map, addIndex } from 'ramda'
import { Box, Button } from '@material-ui/core'
import { theme } from '../../config/theme'

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 24px;
  width: calc(100% - 48px);
  height: 240px;
  background-color: ${theme.paperBg};
`

const subreddits = [
  'Frontend', 'ReactJS', 'VueJS', 'Angular'
]

const renderButton = (label, index) => (
  <Button variant="contained" color="primary" key={index}>{label}</Button>
)

const FetchButtons = () => (
  <StyledBox>
    { addIndex(map)(renderButton, subreddits) }
  </StyledBox>
)

export default FetchButtons
