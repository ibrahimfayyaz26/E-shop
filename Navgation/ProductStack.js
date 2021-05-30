import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Products/ProductMain";
import Details from "../screens/Products/ProductDetails";

const stack = createStackNavigator();

const ProductStack = () => {
  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen name="Home" component={Home} />
      <stack.Screen name="Details" component={Details} />
    </stack.Navigator>
  );
};

export default ProductStack;
