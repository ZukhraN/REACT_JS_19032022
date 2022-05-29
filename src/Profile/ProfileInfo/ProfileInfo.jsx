import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo=()=>{
    return(
        <div >                
            <div>
                <img src='https://thumbs.dreamstime.com/b/belle-photo-panoramique-d-aurore-bor%C3%A9ale-%C3%A0-travers-le-horizont-entier-sur-les-feux-de-for%C3%AAt-et-la-ville-pins-dans-campagne-202218275.jpg'/>
            </div>
            <div className={s.descriptionBlock}>Ava+description</div> 
        </div>
    )
};

export default ProfileInfo;

      
  