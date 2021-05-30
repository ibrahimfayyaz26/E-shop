import React from "react";
import { StyleSheet, View } from "react-native";
import { ListItem, Left, Body, Right, Thumbnail, Text, H3 } from "native-base";

const CartItem = (props) => {
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
            uri: props.data.image
              ? props.data.image
              : "https://image.flaticon.com/icons/png/512/3334/3334886.png",
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
          <H3>{props.data.name}</H3>
        </Left>
        <Right>
          <Text>${props.data.price}</Text>
        </Right>
      </Body>
    </ListItem>
  );
};

const styles = StyleSheet.create({});

export default CartItem;
