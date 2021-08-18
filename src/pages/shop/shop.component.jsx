import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.components';
import { convertCollectionsSnapShotToMap, firestore } from '../../components/firebase/firebase.utils';
import WithSpinner from '../../components/with-spinner/with-spinner.components';
import { updateCollections } from '../../redux/shop/shop.actions';
import CollectionPage from '../collection/collection.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component{
    constructor(){
        super()
        this.state = {
            loading: true
        }
    }

    unsubscribeFromSnapShot = null;

    componentDidMount(){
        const {updateCollections} = this.props;
        const CollectionRef = firestore.collection('collections');

        CollectionRef.onSnapshot(async snapshot =>{
            const collectionMap = convertCollectionsSnapShotToMap(snapshot);
            updateCollections(collectionMap);
            this.setState({loading:false});
        })
    }
    render(){
        const {match} = this.props;
        const {loading} = this.state;
        return(<div className="shop-page">
           <Route exact path={match.path} render={(props)=><CollectionsOverviewWithSpinner isLoading={loading} {...props}/>}/>
        <Route path={`${match.path}/:collectionId`} render={(props)=><CollectionsOverviewWithSpinner isLoading={loading} {...props}/>}/>
        </div>)
    }
}

const mapDispatchToProps = dispatch =>({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});


export default connect(null,mapDispatchToProps)(ShopPage);