import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts=(props)=>{


    let postsElemets = props.posts.map ( post =>  <Post message={post.message} likeCount={post.likeCount}/> )

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
