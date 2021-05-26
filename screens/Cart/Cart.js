import React from "react";
import { StyleSheet, View, Dimensions, Button } from "react-native";
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
import * as Action from "../../store/Action/cartItems";
import { SwipeListView } from "react-native-swipe-list-view";

const { width, height } = Dimensions.get("window");

const Cart = (props) => {
  var total = 0;
  props.cartItems.forEach(
    (item) => (total += item.product.price * item.quantity)
  );
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
                key={Math.random() * Math.random()}
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
          <View
            style={{
              flexDirection: "row",
              bottom: 0,
              elevation: 20,
              position: "absolute",
              left: 0,
              backgroundColor: "white",
            }}
          >
            <Left>
              <Text style={{ margin: 10, color: "red", fontSize: 18 }}>
                ${Math.ceil(total)}
              </Text>
            </Left>
            <Right>
              <Button title="Clear" onPress={() => props.clear()} />
            </Right>
            <Right>
              <Button title="Checkout" />
            </Right>
          </View>
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

const dispatchProps = (dispatch) => {
  return {
    clear: () => dispatch(Action.clear()),
    remove: (i) => dispatch(Action.remove(i)),
  };
};

export default connect(stateData, dispatchProps)(Cart);
