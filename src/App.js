import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { Theme } from './styles/theme'
import { Diagnosis } from './pages/Diagnosis'
import { Background } from './components/fragments/Background'
import BackgroundSVG from './assets/bg.svg'

export const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Background>
        <img src={BackgroundSVG} />
      </Background>
      <Diagnosis />
    </ThemeProvider>
  )
}
