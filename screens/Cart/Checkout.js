import React, { useEffect, useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import { connect } from "react-redux";
import FormContainer from "../../shared/Form/FormContainer";
import Input from "../../shared/Form/Input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Icon from "react-native-vector-icons/FontAwesome";
import { Item, Picker } from "native-base";

const countries = require("../../data/120 countries.json");

const Checkout = (props) => {
  const [orderItems, setOrderItems] = useState();
  const [address, setAddress] = useState();
  const [address2, setAddress2] = useState();
  const [city, setCity] = useState();
  const [zip, setZip] = useState();
  const [country, setCountry] = useState();
  const [phone, setPhone] = useState();

  useEffect(() => setOrderItems(props.CartItems), []);

  const checkOut = () => {
    let order = {
      city,
      country,
      dateOrdered: Date.now(),
      orderItems,
      phone,
      shippingAddress1: address,
      shippingAddress2: address2,
      zip,
    };

    props.navigation.navigate("Payment", { order: order });
  };

  return (
    <KeyboardAwareScrollView
      viewIsInsideTabBar={true}
      extraHeight={200}
      enableOnAndroid={true}
    >
      <FormContainer title={"Shipping Address"}>
        <Input
          placeholder={"Phone"}
          value={phone}
          keyboardType={"numeric"}
          onChangeText={(text) => setPhone(text)}
        />
        <Input
          placeholder={"Shipping Address 1"}
          value={address}
          onChangeText={(text) => setAddress(text)}
        />
        <Input
          placeholder={"Shipping Address 2"}
          value={address2}
          onChangeText={(text) => setAddress2(text)}
        />
        <Input
          placeholder={"City"}
          value={city}
          onChangeText={(text) => setCity(text)}
        />
        <Input
          placeholder={"Zip Code"}
          value={zip}
          keyboardType={"numeric"}
          onChangeText={(text) => setZip(text)}
        />
        <Item picker>
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" color={"#007aff"} />}
            style={{ height: 40 }}
            selectedValue={country}
            placeholder="Select your country"
            placeholderStyle={{ color: "#007aff" }}
            placeholderIconColor="#007aff"
            onValueChange={(e) => setCountry(e)}
          >
            {countries.map((c) => {
              return (
                <Picker.Item
                  key={c.code.toString()}
                  label={c.name}
                  value={c.name}
                />
              );
            })}
          </Picker>
        </Item>
        <View style={{ width: "80%", alignItems: "center" }}>
          <Button title="Confirm" onPress={() => checkOut()} />
        </View>
      </FormContainer>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({});

const mapToProps = (state) => {
  const { cartItems } = state;
  return {
    CartItems: cartItems,
  };
};

export default connect(mapToProps, null)(Checkout);
