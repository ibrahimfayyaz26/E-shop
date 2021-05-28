import React from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";

const { height } = Dimensions.get("window");

const Confirm = (props) => {
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
      {props.route.params && (
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
      )}
    </ScrollView>
  );
};

export default Confirm;

const styles = StyleSheet.create({});
