import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import Input from "../../shared/Form/Input";
import Form from "../../shared/Form/FormContainer";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const loginData = () => {
    if (email === "" || password === "") {
      setError(true);
    }
  };

  return (
    <Form title="Login">
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
        <Button title="Login" onPress={() => loginData()} />
      </View>
      <View
        style={{ margin: 10, alignItem: "center", marginTop: 10, padding: 5 }}
      >
        <Text>Dont have an account</Text>
        <Button
          title="Register"
          onPress={() => props.navigation.navigate("Register")}
        />
      </View>
    </Form>
  );
};

export default Login;

const styles = StyleSheet.create({});
