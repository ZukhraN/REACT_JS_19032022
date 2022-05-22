import React from 'react'
import s from './Dialogs.module.css'


const Dialogs=()=> {
    return(
        <dir className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Dimych
                </div>
                <div className={s.dialog}>
                    Andrey
                </div> 
                <div className={s.dialog}>
                    Sveta
                </div>
                <div className={s.dialog}>
                    Sasha
                </div>
                <div className={s.dialog}>
                    Valeriy
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi!</div>
                <div className={s.message}>How are you doing?</div>
                <div className={s.message}>Yo-yo</div>
            </div>
        </dir>

   )
}

export default Dialogs;