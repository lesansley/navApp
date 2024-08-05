import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import RootStackNavigation from "./RootStack";
import Feed from "../screens/Feed";

type TabsParamList = {
  HomeTab: undefined;
  FeedTab: undefined;
};

const Tab = createBottomTabNavigator<TabsParamList>();

const TabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeTab"
        component={RootStackNavigation}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="FeedTab"
        component={Feed}
        options={{
          tabBarLabel: "Feeds",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="newspaper" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;
