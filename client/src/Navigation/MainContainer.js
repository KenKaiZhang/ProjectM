import * as React from "react";
import { View, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

//Screens
import ReadScreen from "./Screens/ReadScreen";
import SearchScreen from "./Screens/SearchScreen";
import LibraryScreen from "./Screens/LibraryScreen";
import ProfileScreen from "./Screens/ProfileScreen";

// Screen names
const readName = "Read";
const searchName = "Search";
const libraryName = "Library";
const profileName = "Profile";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={readName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === readName) {
              iconName = focused ? "book" : "book-outline";
            } else if (rn === searchName) {
              iconName = focused ? "search" : "search-outline";
            } else if (rn === libraryName) {
              iconName = focused ? "library" : "library-outline";
            } else if (rn === profileName) {
              iconName = focused ? "person" : "person-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name={readName} component={ReadScreen} />
        <Tab.Screen name={searchName} component={SearchScreen} />
        <Tab.Screen name={libraryName} component={LibraryScreen} />
        <Tab.Screen name={profileName} component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
