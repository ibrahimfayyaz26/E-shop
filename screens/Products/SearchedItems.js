import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import {
  Container,
  Content,
  ListItem,
  Left,
  Body,
  Thumbnail,
  Text,
} from "native-base";

var { width } = Dimensions.get("window");

const SearchedItems = (props) => {
  const { filteredProducts } = props;
  return (
    <Container style={{ width: width }}>
      <Content>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => {
            return (
              <ListItem
                onPress={() =>
                  props.navigation.navigate("Details", {
                    item: product,
                  })
                }
                key={product._id.$oid}
                avatar
              >
                <Left>
                  <Thumbnail
                    source={{
                      uri: product.image
                        ? product.image
                        : "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png",
                    }}
                  />
                </Left>
                <Body>
                  <Text>{product.name}</Text>
                  <Text note>{product.description}</Text>
                </Body>
              </ListItem>
            );
          })
        ) : (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Text style={{ alignSelf: "center" }}>No item found</Text>
          </View>
        )}
      </Content>
    </Container>
  );
};

export default SearchedItems;

const styles = StyleSheet.create({});
