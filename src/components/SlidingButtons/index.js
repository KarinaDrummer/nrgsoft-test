import React from 'react'
import styled from 'styled-components'
import { map, addIndex } from 'ramda'
import { Box } from '@material-ui/core'
import { theme } from '../../config/theme'
import subreddits from '../../config/subreddits'
import Button from './Button'

const
  StyledBox = styled(Box)`
    display: flex;
    flex-direction: column;
    margin: 24px;
    padding: 12px;
    width: calc(100% - 72px);
    background-color: ${theme.paperBg};
  `,

  Track = styled.div`
    margin: 0;
    padding: 12px;
  `

const renderButton = (value, index) => (
  <Track key={ index }>
    <Button label={ value.title } subredditID={ value.id } />
  </Track>
)

const SlidingButtons = () => (
  <StyledBox>
    { addIndex(map)(renderButton, subreddits) }
  </StyledBox>
)

export default SlidingButtons
