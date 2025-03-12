import React from 'react';
import './scss/styles.module.scss';
import Header from './components/Header/Header.jsx';
import Content from './components/Content/Content.jsx';
import Footer from './components/Footer/Footer.jsx';
function App() {
  return (
    <div className="app">
      <Header />
      <Content />
      <Footer/>
    </div>
  );
}

export default App;
