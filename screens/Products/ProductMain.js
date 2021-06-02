import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  View,
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
import baseUrl from "../../assets/url/baseUrl";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";
import ProductList from "./ProductList";
import SearchedItems from "./SearchedItems";
import Banner from "../../shared/Banner";
import CategoryFilter from "./CategoryFilter";

const data = require("../../data/products.json");
const catogoriesData = require("../../data/cateogories.json");

var { height } = Dimensions.get("window");

const ProductMain = (props) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [focus, setFocus] = useState();
  const [catData, setCatData] = useState([]);
  const [active, setActive] = useState();
  const [initialState, setInitialState] = useState([]);
  const [productsCtg, setProductsCtg] = useState([]);
  const [isLoadind, setIsLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      axios
        .get(`${baseUrl}/Product`)
        .then((i) => {
          setProducts(i.data);
          setFilteredProducts(i.data);
          setProductsCtg(i.data);
          setInitialState(i.data);
          setIsLoading(false);
        })
        .catch((i) => console.log(i));

      axios
        .get(`${baseUrl}/Category`)
        .then((i) => {
          setCatData(i.data);
        })
        .catch((i) => console.log(i));

      setFocus(false);
      setActive(-1);
    }, [])
  );

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
              products.filter((i) => i.category.id === ctg),
              setActive(true)
            ),
          ];
    }
  };

  return (
    <>
      {isLoadind == false ? (
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
            <SearchedItems
              navigation={props.navigation}
              filteredProducts={filteredProducts}
            />
          ) : (
            <ScrollView style={{ flex: 1 }}>
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
                      <ProductList
                        navigation={props.navigation}
                        key={Math.random() * Math.random()}
                        item={item}
                      />
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
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="red" />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    height: height * 2.7,
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
  },
});

export default ProductMain;
