import * as React from "react";
import { View, Text } from "react-native";

export default function ReadScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alighItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => navigation.navigate("Home")}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        Read Screen
      </Text>
    </View>
  );
}
