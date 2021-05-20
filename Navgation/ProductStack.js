import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Products/ProductMain";
import Details from "../screens/Products/ProductDetails";

const stack = createStackNavigator();

const ProductStack = () => {
  return (
    <stack.Navigator>
      <stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="Details"
        component={Details}
        options={{
          headerShown: false,
        }}
      />
    </stack.Navigator>
  );
};

export default ProductStack;
