import React from 'react';


import CollectionPreview from '../preview-collection/collection-preview';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCollectionsForPreview, } from '../../redux/shop/shop.selectors';
import { CollectionOverviewContainter } from './collections-overview.styles';

const CollectionsOverview = ({items})=>{
    return(
    <CollectionOverviewContainter>
        {
            items.map(({id,...otherCollectionProps})=> <CollectionPreview key={id} {...otherCollectionProps}/>
            )
        }
    </CollectionOverviewContainter>
)};

const mapStateToProps = createStructuredSelector({
    items: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);