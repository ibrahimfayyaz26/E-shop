import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import Card from "./ProductCard";

var { width } = Dimensions.get("window");

const ProductList = (props) => {
  return (
    <TouchableOpacity style={{ width: "50%" }}>
      <View style={{ width: width / 2, backgroundColor: "gainsboro" }}>
        <Card {...props.item} />
      </View>
    </TouchableOpacity>
  );
};

export default ProductList;

const styles = StyleSheet.create({});
