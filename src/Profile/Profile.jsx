import React from 'react';
// import p from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile=(props)=>{

   
    return(
        <div >
            <ProfileInfo />   
            <MyPosts posts={props.posts} />
            <div>Ava+description</div> 
        </div>
    )
};

export default Profile;
