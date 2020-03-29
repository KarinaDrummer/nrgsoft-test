import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ThemeProvider } from '@material-ui/styles'
import { muiTheme } from '~/config/theme'
import { Grid } from '@material-ui/core'

const Wrapper = styled(Grid)`
  height: 100vh;
  padding-top: 72px;
  background-color: #101112;
  color: #ffffff;
`

const Layout = (props) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <Wrapper
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        {props.children}
      </Wrapper>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.element,
}

export default Layout
