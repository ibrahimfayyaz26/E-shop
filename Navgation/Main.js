import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Header from ".././shared/Header";
import Tab from "./TabNavigation";
import { StatusBar } from "expo-status-bar";

const Main = () => {
  return (
    <NavigationContainer>
      <Header />
      <Tab />
      <StatusBar style="light" />
    </NavigationContainer>
  );
};

export default Main;
