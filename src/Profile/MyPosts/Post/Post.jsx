import React from 'react';
import p from './Post.module.css';

const Post=(props)=>{
    return(
        <div className={p.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLn5AG9W4gmcr_iyzxzxqa4Wt_uSmm9Q5VPg&usqp=CAU'></img>
            { props.message } 
            <div>
                <span>likes</span>{ props.likeCount }
            </div>
        </div>
    )
};

export default Post;
