// Import necessary components and functions from react-navigation and react-native libraries
import {
  createDrawerNavigator, // Function to create a drawer navigator
  DrawerContentScrollView, // Component to wrap the drawer content in a scroll view
  DrawerItem, // Component to create an item in the drawer
  DrawerItemList, // Component to list all drawer items
} from "@react-navigation/drawer";
import Home from "../screens/Home"; // Import Home screen component
import Feed from "../screens/Feed"; // Import Feed screen component
import Profile from "../screens/Profile"; // Import Profile screen component
import { useNavigation } from "@react-navigation/native"; // Import hook to access navigation

// Define the types for the drawer navigator's parameters
type DrawerParamList = {
  Home: undefined; // Home screen does not expect any parameters
  Feed: undefined; // Feed screen does not expect any parameters
  Profile: undefined; // Profile screen does not expect any parameters
};

// Create a drawer navigator with the defined parameter list
const Drawer = createDrawerNavigator<DrawerParamList>();

// Define a custom component for the drawer content
function CustomDrawerContent(props: any) {
  const navigation = useNavigation(); // Get the navigation object using the hook
  return (
    // Wrap the drawer content in a scroll view
    <DrawerContentScrollView {...props}>
      {/* List all drawer items */}
      <DrawerItemList {...props} />
      {/* Add a custom drawer item to close the drawer */}
      <DrawerItem label="Close drawer" onPress={() => navigation.goBack()} />
    </DrawerContentScrollView>
  );
}

const DrawerNav = () => {
  return (
    <Drawer.Navigator drawerContent={CustomDrawerContent}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
