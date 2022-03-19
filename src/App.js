import React from 'react';
import './App.css';
import Header from './Header';
import NavBar from './nav';
import Profile from './Profile';



const App =()=> {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavBar />
      <Profile />
    </div>
  );
}

export default App;
