import { StatusBar } from "expo-status-bar";
import React from "react";
import { LogBox, StyleSheet, Text, View } from "react-native";

//Navigators
import Main from "./Navgation/Main";

LogBox.ignoreAllLogs(true);

export default function App() {
  return <Main />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
