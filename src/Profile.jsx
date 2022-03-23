import React from "react";
import p from './Profile.module.css';

const Profile=()=>{
    return(
        <div className={p.content}>
            <div>
                <img src='https://thumbs.dreamstime.com/b/belle-photo-panoramique-d-aurore-bor%C3%A9ale-%C3%A0-travers-le-horizont-entier-sur-les-feux-de-for%C3%AAt-et-la-ville-pins-dans-campagne-202218275.jpg'/>
            </div>
            <div>
                Ava+description
            </div>      
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={p.item}>
                    <div className={p.item}>
                        post 1
                    </div>
                    <div className={p.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Profile;
