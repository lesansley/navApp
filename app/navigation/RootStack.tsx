import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Feed from "../screens/Feed";
import Profile from "../screens/Profile";
import Details from "../screens/Details";
import DrawerNav from "./DrawerNav";
import Modal from "./Modal";

type RootStackParamList = {
  Home: undefined;
  Feed: undefined;
  Profile: undefined;
  Details: { itemId: string };
  Drawer: undefined;
  Modal: undefined;
};
const RootStack = createNativeStackNavigator<RootStackParamList>();
export type HomePageProps = NativeStackScreenProps<RootStackParamList, "Home">;
export type ProfilePageProps = NativeStackScreenProps<
  RootStackParamList,
  "Profile"
>;
export type DetailsPageProps = NativeStackScreenProps<
  RootStackParamList,
  "Details"
>;
const RootStackNavigation = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Group
        screenOptions={{
          headerStyle: { backgroundColor: "red" },
          headerTintColor: "yellow",
        }}
      >
        <RootStack.Screen
          name="Home"
          component={Home}
          options={{ title: "Your Home" }}
        />
        <RootStack.Screen name="Feed" component={Feed} />
        <RootStack.Screen name="Profile" component={Profile} />
        <RootStack.Screen name="Details" component={Details} />
      </RootStack.Group>
      <RootStack.Group>
        <RootStack.Screen
          name="Drawer"
          component={DrawerNav}
          options={{ headerShown: false }}
        />
      </RootStack.Group>
      <RootStack.Group screenOptions={{ presentation: "modal" }}>
        <RootStack.Screen name="Modal" component={Modal} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootStackNavigation;
