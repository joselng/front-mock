import React from 'react'

import GlobalStyle from 'src/styles/global'
import { theme } from 'src/theme'
import { ThemeProvider } from 'styled-components'

import Login from './pages/Login'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
// import Router from './routes'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Login />
        </ThemeProvider>
    )
}

export default App
