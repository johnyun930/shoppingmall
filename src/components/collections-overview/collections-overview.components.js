import React from 'react';


import CollectionPreview from '../preview-collection/collection-preview';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import './collections-overview.styles.scss'
import { selectShopSections } from '../../redux/shop/shop.selectors';

const CollectionsOverview = ({items})=>{
    return(
    <div className ='collections-overview'>
        {
            items.map(({id,...otherCollectionProps})=> <CollectionPreview key={id} {...otherCollectionProps}/>
            )
        }
    </div>
)};

const mapStateToProps = createStructuredSelector({
    items: selectShopSections
});

export default connect(mapStateToProps)(CollectionsOverview);