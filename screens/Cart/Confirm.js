import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Button,
} from "react-native";
import { ListItem, Left, Body, Thumbnail, Right } from "native-base";
import { connect } from "react-redux";
import * as Action from "../../store/Action/cartItems";

const { height, width } = Dimensions.get("window");

const Confirm = (props) => {
  const data = props.route.params ? props.route.params : null;
  return (
    <ScrollView
      contentContainerStyle={{
        height: height,
        backgroundColor: "white",
        alignItems: "center",
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          margin: 8,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Confirm Order</Text>
      </View>
      {data ? (
        <View
          style={{
            borderWidth: 1,
            alignItems: "center",
            borderColor: "orange",
            width: "80%",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Shipping To:</Text>
          <View style={{ padding: 6 }}>
            <Text style={{ fontSize: 16 }}>
              Address1 : {props.route.params.order.shippingAddress1}
            </Text>
            <Text style={{ fontSize: 16 }}>
              Address2 : {props.route.params.order.shippingAddress2}
            </Text>
            <Text style={{ fontSize: 16 }}>
              zip code : {props.route.params.order.zip}
            </Text>
            <Text style={{ fontSize: 16 }}>
              City : {props.route.params.order.city}
            </Text>
            <Text style={{ fontSize: 16 }}>
              Country : {props.route.params.order.country}
            </Text>
          </View>
        </View>
      ) : null}
      {data ? (
        <View
          style={{
            alignContent: "center",
            justifyContent: "center",
            backgroundColor: "white",
            width: width,
            marginTop: 5,
          }}
        >
          <Text
            style={{ fontSize: 18, fontWeight: "bold", alignSelf: "center" }}
          >
            Order Items
          </Text>
          {props.route.params.order.orderItems.map(({ product }) => {
            return (
              <ListItem
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 15,
                }}
                key={Math.random() * Math.random()}
                avatar
              >
                <Left>
                  <Thumbnail
                    source={{
                      uri: product.image
                        ? product.image
                        : "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png",
                    }}
                  />
                </Left>
                <Body style={{ flexDirection: "row", alignItems: "center" }}>
                  <Left>
                    <Text style={{ fontSize: 17 }}>{product.name}</Text>
                  </Left>
                  <Right>
                    <Text style={{ fontSize: 17, color: "red" }}>
                      ${product.price}
                    </Text>
                  </Right>
                </Body>
              </ListItem>
            );
          })}
        </View>
      ) : null}
      <View
        style={{
          alignContent: "center",
          justifyContent: "center",
          backgroundColor: "white",
          marginTop: 25,
        }}
      >
        <Button
          title="Place Order"
          onPress={() => [props.clear(), props.navigation.navigate("Cart")]}
        />
      </View>
    </ScrollView>
  );
};

const dispatchProps = (dispatch) => {
  return {
    clear: () => dispatch(Action.clear()),
  };
};

export default connect(null, dispatchProps)(Confirm);

const styles = StyleSheet.create({});
