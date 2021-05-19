import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Products/ProductMain";

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
    </stack.Navigator>
  );
};

export default ProductStack;
