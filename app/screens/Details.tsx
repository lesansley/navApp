import { View, Text, Button } from "react-native";
import React, { useLayoutEffect } from "react";
import { DetailsPageProps } from "../navigation/RootStack";

const Details = ({ navigation, route }: DetailsPageProps) => {
  const { itemId } = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: `Details ${itemId}`,
    });
  }, [navigation, itemId]);
  return (
    <View>
      <Text>Details {itemId}</Text>
      <Button title="Profile" onPress={() => navigation.push("Profile")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Details;
