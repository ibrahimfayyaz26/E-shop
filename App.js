import { StatusBar } from "expo-status-bar";
import React from "react";
import { LogBox, StyleSheet, Text, View } from "react-native";

// Screens
import ProductMain from "./screens/Products/ProductMain";
import Header from "./shared/Header";

//LogBox.ignoreAllLogs(true) to ignore yellow errors

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ProductMain />
      <StatusBar style="light" />
    </View>
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
