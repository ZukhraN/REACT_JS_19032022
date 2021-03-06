import React from 'react';
import './App.css';

import Header from './Header/Header';
import NavBar from './Navbar/nav';
import Profile from './Profile/Profile';
import Dialogs from './Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



const App =(props)=> {

  
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>
          <Routes>

            <Route path='/dialogs*' element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>} />
            <Route path='/profile*' element={<Profile posts={props.posts}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter> 
  );
}

export default App;
