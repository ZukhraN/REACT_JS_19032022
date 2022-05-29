import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts=()=>{

    let posts=    
    [
        {id:0 , message: 'Hi, how are you doing?' , likeCount:12 },
        {id:1 , message: 'Its my first post!' ,  likeCount:8 }
    ]

    let postsElemets = posts.map ( post =>  <Post message={post.message} likeCount={post.likeCount}/> )

    return(
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElemets}
            </div>
        </div>
    )
};

export default MyPosts;
