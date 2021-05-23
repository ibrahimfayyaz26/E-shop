import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";

const Cart = (props) => {
  return (
    <View>
      <Text>fff</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

const stateData = (state) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  };
};

export default connect(stateData, null)(Cart);
