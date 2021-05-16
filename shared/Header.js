import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        resizeMode="contain"
        style={{ height: 50 }}
        source={require("./../assets/Logo.png")}
      />
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginTop: 25,
  },
});
