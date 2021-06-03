import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import UserScreen from "../screens/User/User";
import Login from "../screens/User/Login";
import Register from "../screens/User/Register";

const stack = createStackNavigator();

const User = () => {
  return (
    <stack.Navigator>
      <stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <stack.Screen
        name="Register"
        component={Register}
        options={{ headerTitleAlign: "center" }}
      />
      <stack.Screen
        name="UserScreen"
        component={UserScreen}
        options={{ headerTitleAlign: "center" }}
      />
    </stack.Navigator>
  );
};

export default User;
