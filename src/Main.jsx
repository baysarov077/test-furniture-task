import React from 'react';
import SofaFilter from './components/filters/SofaFilter';
import Header from './components/header/Header';
import Sofas from './components/sofa/Sofas';

const Main = () => {
  return (
    <div className='container'>
      <Header />
      <SofaFilter />
      <hr style={{
        margin: 'auto',
        marginTop: '35px'
      }} />
      <Sofas />
    </div>
  );
};

export default Main;