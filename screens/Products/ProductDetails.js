import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Image } from "react-native";
import { Container, H1, Text } from "native-base";

const ProductDetails = (props) => {
  const [item, setItem] = useState(props.route.params.item);
  const [avalibility, setAvalibility] = useState("");
  return (
    <Container style={{ position: "relative", height: "100%" }}>
      <ScrollView style={{ marginBottom: 80, padding: 5 }}>
        <View>
          <Image
            source={{
              uri: item.image
                ? item.image
                : "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png",
            }}
            style={{ width: "100%", height: 250 }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.contentContainer}>
          <H1 style={styles.contentHeader}>{item.name}</H1>
          <Text style={styles.contentText}>{item.brand}</Text>
        </View>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  contentHeader: {
    fontWeight: "bold",
    marginBottom: 20,
  },
  contentText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default ProductDetails;
