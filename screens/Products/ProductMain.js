import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import ProductList from "./ProductList";

const data = require("../../data/products.json");

const ProductMain = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => setProducts(data), []);

  return (
    <View style={{ backgroundColor: "gainsboro" }}>
      <Text>products</Text>
      <View
        style={{
          width: "100%",
          flex: 1,
          backgroundColor: "gainsboro",
        }}
      >
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
  );
};

const styles = StyleSheet.create({});

export default ProductMain;
