import React from 'react';
import Footer from './Components/Footer/Footer.js';
import { GlobalStyle } from './Components/GlobalStyle/GlobalStyle.js';
import Header from './Components/Header/Header.js'
import Main from './Components/Main/Main.js';

const App = () => {
  return (
    <>
      <GlobalStyle />
       <Header />
       <Main />
       <Footer />
    </>
  );
}

export default App;
