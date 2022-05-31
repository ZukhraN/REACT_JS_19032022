import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
// import dialogsData from '../index';
// import messagesData from '../index';

const Dialogs=()=> {

    let messagesData = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you doing?'},
        {id: 3, message: 'Yo-yo'},
        {id: 4, message: 'Yo-yo'},
        {id: 5, message: 'Yo-yo'},
      ]
      
      
      
      let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Valeriy'},
      ]
      

    

    let dialogsElements = dialogsData.map ( dialog => <DialogItem name={dialog.name} id={dialog.id} /> ); 

    let messagesElements = messagesData.map ( message => <Message message={message.message} /> );

    return(
    
            <dir className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </dir>
     
   )
}

export default Dialogs;