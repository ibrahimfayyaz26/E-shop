import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Keyboard,
} from "react-native";
import {
  Container,
  Header,
  Item,
  Input,
  Icon,
  Button,
  Text,
} from "native-base";

import ProductList from "./ProductList";
import SearchedItems from "./SearchedItems";

const data = require("../../data/products.json");

const ProductMain = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [focus, setFocus] = useState();

  useEffect(() => {
    setProducts(data);
    setFilteredProducts(data);
    setFocus(false);
  }, []);

  const searchCom = (text) => {
    setFilteredProducts(
      products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
    );
  };
  const focusing = () => {
    setFocus(true);
  };
  const blur = () => {
    setFocus(false);
    Keyboard.dismiss();
  };

  return (
    <Container>
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input
            placeholder="Search"
            onFocus={focusing}
            onChangeText={(i) => searchCom(i)}
          />
          {focus == true ? <Icon name="ios-close" onPress={blur} /> : null}
        </Item>
      </Header>
      {focus == true ? (
        <SearchedItems filteredProducts={filteredProducts} />
      ) : (
        <View style={{ flexWrap: "wrap", backgroundColor: "gainsboro" }}>
          <Text>products</Text>
          <View style={styles.list}>
            <FlatList
              numColumns={2}
              data={products}
              keyExtractor={(item) => item._id.$oid}
              renderItem={({ item }) => (
                <ProductList key={item._id.$oid} item={item} />
              )}
            />
          </View>
        </View>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  list: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
  },
});

export default ProductMain;
