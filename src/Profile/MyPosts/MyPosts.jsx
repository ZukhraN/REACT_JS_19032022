import React from "react";
import p from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts=()=>{
    return(
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={p.item}>
                <Post message='Hi, how are you doing?' likeCount=' 18'/>
                <Post message='Its my first post!' likeCount=' 5'/>

            </div>
        </div>
    )
};

export default MyPosts;
