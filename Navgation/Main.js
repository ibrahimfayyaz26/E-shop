import React from "react";
import { NavigationContainer } from "@react-navigation/native";

const Main = ({ children }) => {
  return <NavigationContainer>{children}</NavigationContainer>;
};

export default Main;
