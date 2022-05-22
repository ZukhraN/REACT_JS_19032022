import React from 'react';
import s from './Header.module.css';


const Header=()=>{
    return(
        <header className={s.header}>
            <img src='http://buildicus.com/blog/img/uploads/2014/07/Yourlogo.jpg'/>
        </header>  
    )
};

export default Header;