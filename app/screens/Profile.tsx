import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ProfilePageProps } from "../navigation/RootStack";

const Profile = ({ navigation }: ProfilePageProps) => {
  return (
    <View>
      <Text>Profile</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Profile;
