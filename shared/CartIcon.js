import React from "react";
import { StyleSheet } from "react-native";
import { Badge, Text } from "native-base";
import { connect } from "react-redux";

const CartIcon = (props) => {
  return (
    <>
      {props.cartItems.length ? (
        <Badge
          style={{
            width: 25,
            position: "absolute",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            top: -10,
            right: -13,
          }}
        >
          <Text style={{ fontSize: 13, width: 100, fontWeight: "bold" }}>
            {props.cartItems.length}
          </Text>
        </Badge>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({});

const stateProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems,
  };
};

export default connect(stateProps, null)(CartIcon);
