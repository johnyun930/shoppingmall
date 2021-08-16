import React from 'react';
import { withRouter } from 'react-router';
import { BackgroundImage } from '../collection-item/collection-item.styles.js';

import { Content, MenuItemContainer, Subtitle, Title } from './menu-item.styles.js';

export const MenuItem = withRouter(({id,title,imageUrl,linkUrl,size,history,match})=>{
    console.log(id);
    console.log(title);
    return(  
        <MenuItemContainer className={`${size}`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
            <BackgroundImage style={{
                backgroundImage: `url(${imageUrl})` 
            }}/>
            <Content>
                <Title>{title.toUpperCase()}</Title>
                <Subtitle>SHOP Now</Subtitle>
            </Content>
        </MenuItemContainer>
    )
});

