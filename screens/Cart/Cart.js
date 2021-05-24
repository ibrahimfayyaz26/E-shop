import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { connect } from "react-redux";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
  H1,
} from "native-base";

const { width, height } = Dimensions.get("window");

const Cart = (props) => {
  return (
    <>
      {props.cartItems.length ? (
        props.cartItems.map((item) => {
          return (
            <Container style={{ flex: 1, width: width }}>
              <Header />
              <Content>
                <ListItem avatar>
                  <Left>
                    <Thumbnail
                      source={{
                        uri: item.product.image
                          ? item.product.image
                          : "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png",
                      }}
                    />
                  </Left>
                  <Body style={{ flexDirection: "row", alignItems: "center" }}>
                    <Left>
                      <H1>{item.product.name}</H1>
                    </Left>
                    <Right>
                      <Text>${item.product.price}</Text>
                    </Right>
                  </Body>
                </ListItem>
              </Content>
            </Container>
          );
        })
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
