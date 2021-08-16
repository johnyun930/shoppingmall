import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';
import { CollectionPageContainer,PageTitle,Items} from './collection.styles.js';

const CollectionPage = ({collection}) =>{
    console.log(collection);
    return(
<CollectionPageContainer>
    <PageTitle>{collection.title}</PageTitle>
    <Items>
        {
            collection.items.map((item)=><CollectionItem key={item.id} item={item} />)
        }
    </Items>
</CollectionPageContainer>
    )
}

const mapStateToProps = (state,ownProps) =>({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);