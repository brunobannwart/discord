import React from 'react';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Layout />
    </>
  );
}

export default App;