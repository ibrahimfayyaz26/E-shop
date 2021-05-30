import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Checkout from "../screens/Cart/Checkout";
import Payment from "../screens/Cart/Payment";
import Confirm from "../screens/Cart/Confirm";

const Tab = createMaterialTopTabNavigator();

const CheckoutTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Checkout" component={Checkout} />
      <Tab.Screen name="Payment" component={Payment} />
      <Tab.Screen name="Confirm" component={Confirm} />
    </Tab.Navigator>
  );
};

export default CheckoutTab;
