import { NavigationContainer } from "@react-navigation/native";
import RootStackNavigation from "./app/navigation/RootStack";
import TabNav from "./app/navigation/TabNav";

export default function App() {
  return (
    <NavigationContainer>
      <TabNav />
      {/* <RootStackNavigation /> */}
    </NavigationContainer>
  );
}
