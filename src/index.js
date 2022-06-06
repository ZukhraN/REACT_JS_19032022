import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts=    
  [
      {id:0 , message: 'Hi, how are you doing?' , likeCount:12 },
      {id:1 , message: 'Its my first post!' ,  likeCount:8 }
  ]

  let messages = [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'How are you doing?'},
    {id: 3, message: 'Yo-yo'},
    {id: 4, message: 'Yo-yo'},
    {id: 5, message: 'Yo-yo'},
  ]

  let dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Valeriy'},
  ]
  

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} messages={messages} dialogs={dialogs}/>
  </React.StrictMode>, 
  document.getElementById('root')
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
