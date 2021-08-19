import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import CollectionsOverview from "../../components/collections-overview/collections-overview.components";
import WithSpinner from "../../components/with-spinner/with-spinner.components";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import CollectionPage from "../collection/collection.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }
  render() {
    const { match, isColletionFetching } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={match.path}
          render={(props) => (
            <CollectionsOverviewWithSpinner
              isLoading={isColletionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionsOverviewWithSpinner
              isLoading={isColletionFetching}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  isColletionFetching: selectIsCollectionFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
