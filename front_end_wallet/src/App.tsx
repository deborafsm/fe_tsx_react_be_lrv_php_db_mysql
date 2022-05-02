import React from 'react';
import { ThemeProvider } from 'styled-components'
import dark from './styles/themes/dark';
import light from './styles/themes/light';
import GlobalStyle from './styles/GlobalStyle';
import List from './pages/List/list';
import Layout from './components/Layout/layout';
const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={dark}>
        <GlobalStyle />
        <Layout>
          <List />
        </Layout>
      </ThemeProvider>

    </>

  )
}


export default App;
