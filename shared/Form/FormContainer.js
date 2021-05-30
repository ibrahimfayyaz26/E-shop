import React from "react";
import { ScrollView, Dimensions, Text } from "react-native";

const { width } = Dimensions.get("window");

const FormContainer = (props) => {
  return (
    <ScrollView
      contentContainerStyle={{
        marginTop: 30,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 400,
        width: width,
      }}
    >
      <Text style={{ fontSize: 30 }}>{props.title}</Text>
      {props.children}
    </ScrollView>
  );
};

export default FormContainer;
