import React from "react";
import { View, TextInput } from "react-native";

const Input = (props) => {
  return (
    <TextInput
      style={{
        margin: 10,
        width: "80%",
        height: 60,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "orange",
        padding: 10,
        backgroundColor: "white",
      }}
      value={props.value}
      onChangeText={props.onChangeText}
      placeholder={props.placeholder}
      autoCorrect={props.autoCorrect}
      onFocus={props.onFocus}
      secureTextEntry={props.secureTextEntry}
      keyboardType={props.keyboardType}
    />
  );
};

export default Input;
