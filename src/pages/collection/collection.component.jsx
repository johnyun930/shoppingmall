import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { firestore } from "../../firebase/firebase.utils";
import { selectCollection } from "../../redux/shop/shop.selectors";
import {
  CollectionPageContainer,
  PageTitle,
  Items,
} from "./collection.styles.js";

const CollectionPage = ({ collection }) => {
  useEffect(() => {
    console.log("I am subscribing");
    const unsubscribeFromCollections = firestore
      .collection("collections")
      .onSnapshot((snapshot) => console.log(snapshot));
    return () => {
      console.log("I am unsubscribing");
      unsubscribeFromCollections();
    };
  });
  console.log(collection);
  return (
    <CollectionPageContainer>
      <PageTitle>{collection.title}</PageTitle>
      <Items>
        {collection.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </Items>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
