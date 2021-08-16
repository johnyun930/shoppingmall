import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.components';
import { convertCollectionsSnapShotToMap, firestore } from '../../components/firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';
import CollectionPage from '../collection/collection.component';
class ShopPage extends React.Component{
    unsubscribeFromSnapShot = null;

    componentDidMount(){
        const {updateCollections} = this.props;
        const CollectionRef = firestore.collection('collections');

        CollectionRef.onSnapshot(async snapshot =>{
            const collectionMap = convertCollectionsSnapShotToMap(snapshot);
            updateCollections(collectionMap);
        })
    }
    render(){
        const {match} = this.props;
        return(<div className="shop-page">
           <Route exact path={match.path} component={CollectionsOverview}/>
        <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
        </div>)
    }
}

const mapDispatchToProps = dispatch =>({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})


export default connect(null,mapDispatchToProps)(ShopPage);