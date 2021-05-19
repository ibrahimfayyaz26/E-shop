import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Keyboard,
  Dimensions,
  ScrollView,
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
import Banner from "../../shared/Banner";
import CategoryFilter from "./CategoryFilter";

const data = require("../../data/products.json");
const catogoriesData = require("../../data/cateogories.json");

var { height } = Dimensions.get("window");

const ProductMain = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [focus, setFocus] = useState();
  const [catData, setCatData] = useState([]);
  const [active, setActive] = useState();
  const [initialState, setInitialState] = useState([]);
  const [productsCtg, setProductsCtg] = useState([]);

  useEffect(() => {
    setProducts(data);
    setFilteredProducts(data);
    setFocus(false);
    setCatData(catogoriesData);
    setActive(-1);
    setProductsCtg(data);
    setInitialState(data);
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

  const changeCtg = (ctg) => {
    {
      ctg === "all"
        ? [setProductsCtg(initialState), setActive(true)]
        : [
            setProductsCtg(
              products.filter((i) => i.category.$oid === ctg),
              setActive(true)
            ),
          ];
    }
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
        <ScrollView>
          <View>
            <View>
              <Banner />
            </View>
            <View>
              <CategoryFilter
                categories={catData}
                categoryFilter={changeCtg}
                productsCtg={productsCtg}
                active={active}
                setActive={setActive}
              />
            </View>
            {productsCtg.length ? (
              <View style={styles.list}>
                {productsCtg.map((item) => (
                  <ProductList key={item._id.$oid} item={item} />
                ))}
              </View>
            ) : (
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  height: height / 2,
                }}
              >
                <Text>No Products Found</Text>
              </View>
            )}
          </View>
        </ScrollView>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  list: {
    height: height,
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
  },
});

export default ProductMain;
