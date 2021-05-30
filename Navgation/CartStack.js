import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Cart from "../screens/Cart/Cart";
import Checkout from "./CheckoutTab";

const stack = createStackNavigator();

const CartStack = () => {
  return (
    <stack.Navigator>
      <stack.Screen
        name="Cart"
        component={Cart}
        options={{ headerShown: false }}
      />
      <stack.Screen
        name="Checkout"
        component={Checkout}
        options={{ headerTitleAlign: "center" }}
      />
    </stack.Navigator>
  );
};

export default CartStack;
