import React from "react";
import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import { ListItem, Text, Badge } from "native-base";

const CategoryFilter = (props) => {
  return (
    <ScrollView
      horizontal={true}
      bounce={true}
      style={{ backgroundColor: "#f2f2f2" }}
    >
      <ListItem>
        <TouchableOpacity>
          <Badge style={[styles.badge, { margin: 5 }]}>
            <Text style={{ color: "white" }}>name</Text>
          </Badge>
        </TouchableOpacity>
      </ListItem>
    </ScrollView>
  );
};

export default CategoryFilter;

const styles = StyleSheet.create({
  badge: {
    alignItems: "center",
    justifyContent: "center",
  },
});
