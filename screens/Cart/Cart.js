import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { connect } from "react-redux";
import {
  Container,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
  H3,
  H1,
} from "native-base";

const { width, height } = Dimensions.get("window");

const Cart = (props) => {
  return (
    <>
      {props.cartItems.length ? (
        <Container>
          <H1 style={{ alignSelf: "center" }}>Cart</H1>
          {props.cartItems.map((item) => {
            return (
              <ListItem
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "white",
                }}
                key={item.product._id.$oid}
                avatar
              >
                <Left>
                  <Thumbnail
                    source={{
                      uri: item.product.image
                        ? item.product.image
                        : "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png",
                    }}
                  />
                </Left>
                <Body
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    margin: 10,
                  }}
                >
                  <Left>
                    <H3>{item.product.name}</H3>
                  </Left>
                  <Right>
                    <Text>${item.product.price}</Text>
                  </Right>
                </Body>
              </ListItem>
            );
          })}
        </Container>
      ) : (
        <Container
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: height,
          }}
        >
          <Text>No Product In your Cart</Text>
          <Text>Go And Do Some Shopping</Text>
        </Container>
      )}
    </>
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
