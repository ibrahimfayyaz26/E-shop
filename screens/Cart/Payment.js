import React, { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import {
  Container,
  Header,
  Content,
  ListItem,
  Text,
  Radio,
  Right,
  Left,
  Icon,
  Picker,
  Title,
  Body,
} from "native-base";

const methods = [
  { name: "Cash on Delivery", value: 1 },
  { name: "Card Payment", value: 2 },
];

const Card = [
  { name: "Visa", value: 1 },
  { name: "Debit Card", value: 2 },
  { name: "Master Card", value: 3 },
];

const Payment = (props) => {
  const [selectedM, setSelectedM] = useState();
  const [card, setCard] = useState();
  return (
    <Container>
      <Header>
        <Body style={{ alignItems: "center" }}>
          <Title>Choose a Payment Method</Title>
        </Body>
      </Header>
      <Content>
        {methods.map((option) => {
          return (
            <ListItem onPress={() => setSelectedM(option.value)}>
              <Left>
                <Text>{option.name}</Text>
              </Left>
              <Right>
                <Radio selected={selectedM == option.value} />
              </Right>
            </ListItem>
          );
        })}
        {selectedM == 2 && (
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" />}
            headerStyle={{ backgroundColor: "#b95dd3" }}
            headerBackButtonTextStyle={{ color: "#fff" }}
            headerTitleStyle={{ color: "#fff" }}
            style={{
              height: 40,
              width: "90%",
              alignSelf: "center",
            }}
            selectedValue={card}
            onValueChange={(i) => setCard(i)}
          >
            {Card.map((i) => {
              return (
                <Picker.Item
                  key={Math.random() * Math.random()}
                  label={i.name}
                  value={i.value}
                />
              );
            })}
          </Picker>
        )}
        <View style={{ marginTop: 60, alignSelf: "center" }}>
          <Button
            title="Confirm"
            onPress={() =>
              props.navigation.navigate("Confirm", props.route.params)
            }
          />
        </View>
      </Content>
    </Container>
  );
};

export default Payment;

const styles = StyleSheet.create({});
