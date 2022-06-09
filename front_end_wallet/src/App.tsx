import React from 'react';
import { ThemeProvider } from 'styled-components'
import dark from './styles/themes/dark';
import light from './styles/themes/light';
import GlobalStyle from './styles/GlobalStyle';
import Rotas from './routes'
const App: React.FC = () => {
  return (

    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <Rotas />
    </ThemeProvider>


  )
}


export default App;
