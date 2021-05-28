import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Button,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { Container, Left, Right, Text, H1 } from "native-base";
import * as Action from "../../store/Action/cartItems";
import { SwipeListView } from "react-native-swipe-list-view";
import CartItem from "./CartItem";
import Icon from "react-native-vector-icons/FontAwesome";

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
          <SwipeListView
            data={props.cartItems}
            keyExtractor={() => Math.random() * Math.random()}
            renderItem={({ item }) => {
              return (
                <CartItem
                  key={Math.random() * Math.random()}
                  data={item.product}
                />
              );
            }}
            renderHiddenItem={({ item }) => {
              return (
                <View
                  style={{
                    flex: 1,
                    justifyContent: "flex-end",
                    flexDirection: "row",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => props.remove(item)}
                    style={{
                      backgroundColor: "red",
                      justifyContent: "center",
                      alignItems: "flex-end",
                      paddingRight: 25,
                      height: 70,
                      width: width / 1.2,
                    }}
                  >
                    <Icon name="trash" size={30} color="white" />
                  </TouchableOpacity>
                </View>
              );
            }}
            leftOpenValue={75}
            disableRightSwipe={true}
            previewOpenDelay={3000}
            friction={1000}
            tension={40}
            stopLeftSwipe={75}
            rightOpenValue={-75}
          />
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
              <Button
                title="Checkout"
                onPress={() => props.navigation.navigate("Checkout")}
              />
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
