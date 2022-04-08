import React from 'react';
import {ThemeProvider} from 'styled-components'
import dark from './styles/themes/dark';
import light from './styles/themes/light';
import GlobalStyle from './styles/GlobalStyle';
import Layout from './components/Layout/layout';
const App: React.FC = () => {
  return (
    <>
    <ThemeProvider theme = {light}>
      <GlobalStyle/>
        <Layout/>
    </ThemeProvider>
      
    </>

  )
}


export default App;
