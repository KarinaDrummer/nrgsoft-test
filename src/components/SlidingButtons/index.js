import React from 'react'
import styled from 'styled-components'
import { map, addIndex } from 'ramda'
import { Box } from '@material-ui/core'
import { theme } from '../../config/theme'
import subreddits from '../../config/subreddits'
import Button from './Button'

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 24px;
  width: calc(100% - 48px);
  height: 240px;
  background-color: ${theme.paperBg};
`

const renderButton = (value, index) => (
  <Button label={value.title} subredditID={value.id} key={index} />
)

const SlidingButtons = () => (
  <StyledBox>
    { addIndex(map)(renderButton, subreddits) }
  </StyledBox>
)

export default SlidingButtons
