import { StatusBar } from "expo-status-bar";
import React from "react";
import { LogBox, StyleSheet, Text, View } from "react-native";

import Header from "./shared/Header";

//Navigators
import Main from "./Navgation/Main";
import Tab from "./Navgation/TabNavigation";

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <Main>
      <Header />
      <Tab />
      <StatusBar style="light" />
    </Main>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
