import React from 'react';

import {CollectionPreviewContainer, Preview, Title} from './collection-preview.styles.js';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({title,items})=>(
    
    <CollectionPreviewContainer>
        
        <Title>{title.toUpperCase()}</Title>
        <Preview>
            {items.filter((item,idx)=>idx<4).map((item)=><CollectionItem key={item.id}  item={item}></CollectionItem>)}
        </Preview>

    </CollectionPreviewContainer>
)

export default CollectionPreview