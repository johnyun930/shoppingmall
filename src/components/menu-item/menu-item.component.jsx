import React from 'react';
import { withRouter } from 'react-router';

import './menu-item.styles.scss';

export const MenuItem = withRouter(({title,imageUrl,linkUrl,size,history,match})=>{
    return(  
        <div className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
            <div className="background-image" style={{
                backgroundImage: `url(${imageUrl})` 
            }}/>
            <div className='content'>
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP Now</span>
            </div>
        </div>
    )
});

