import React from 'react';
import Header from './components/Header';
import AddStore from './pages/AddStore';
import StoreList from './pages/StoreList';

const App = () => {
  return (
    <div>
      <Header />
      <AddStore />
      <StoreList />
    </div>
  );
};

export default App;


