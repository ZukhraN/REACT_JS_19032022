import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
// import dialogsData from '../index';
// import messagesData from '../index';

const Dialogs=(props)=> {
  
  debugger;

    let dialogsElements = props.dialogs.map ( dialogs => <DialogItem name={dialogs.name} id={dialogs.id} /> ); 

    let messagesElements = props.messages.map ( messages => <Message message={messages.message} /> );

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