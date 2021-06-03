import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import Input from "../../shared/Form/Input";
import Form from "../../shared/Form/FormContainer";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  const [error, setError] = useState(false);

  const RegisterData = () => {
    if (email === "" || password === "" || phone === "" || name === "") {
      setError(true);
    } else {
      setError(false);
      props.navigation.navigate("Login");
    }
  };

  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      extraHeight={200}
      viewIsInsideTabBar={true}
    >
      <Form title="Register">
        <Input
          placeholder="Name"
          value={name}
          onChangeText={(i) => setName(i)}
        />
        <Input
          placeholder="Phone"
          value={phone}
          onChangeText={(i) => setPhone(i)}
        />
        <Input
          placeholder="Email"
          value={email}
          onChangeText={(i) => setEmail(i)}
        />
        <Input
          placeholder="Password"
          value={password}
          onChangeText={(i) => setPassword(i)}
          secureTextEntry={true}
        />
        <View style={{ margin: 10, alignItem: "center" }}>
          {error && (
            <Text style={{ marginBottom: 10, color: "red", fontSize: 16 }}>
              Provide cridentials
            </Text>
          )}
          <Button title="Register" onPress={() => RegisterData()} />
        </View>
      </Form>
    </KeyboardAwareScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({});
