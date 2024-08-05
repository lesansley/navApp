import { View, Text, Button } from "react-native";
import React, { useLayoutEffect } from "react";
import { HomePageProps } from "../navigation/RootStack";

const Home = ({ navigation }: HomePageProps) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => alert("This is a button!")}
          title="Info"
          color="#fff"
        />
      ),
    });
  }, [navigation]);
  return (
    <View>
      <Text>Home</Text>
      <Button title="Go to Feed" onPress={() => navigation.push("Feed")} />
      <Button
        title="Go to Profile"
        onPress={() => navigation.push("Profile")}
      />
      <Button
        title="Go to Details 42"
        onPress={() => navigation.push("Details", { itemId: "42" })}
      />
      <Button
        title="Go to Details 139"
        onPress={() => navigation.push("Details", { itemId: "139" })}
      />
      <Button
        title="Go to Drawer"
        onPress={() => navigation.navigate("Drawer")}
      />
      <Button title="Open Modal" onPress={() => navigation.navigate("Modal")} />
    </View>
  );
};

export default Home;
