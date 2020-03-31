import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ThemeProvider } from '@material-ui/styles'
import { muiTheme } from '../config/theme'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #101112;
  color: #ffffff;
`

const Layout = (props) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <Wrapper>
        {props.children}
      </Wrapper>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.element
  ),
}

export default Layout
