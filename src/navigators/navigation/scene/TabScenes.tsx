import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { Host } from "react-native-portalize";
import HomeScreen from "@/presenters/home/HomeScreen";
import navigationConfigs from "../config/options";
import {
  APP_ROUTE,
  AUTHENTICATE_ROUTE,
  TAB_NAVIGATION_ROOT,
} from "../config/routes";
import MainTabNavigator from "../components/MainTabNavigator";

const AuthenStack = createStackNavigator();

function AppStack() {
  return (
    <Host>
      <AuthenStack.Navigator screenOptions={navigationConfigs}>
        <AuthenStack.Screen
          name={TAB_NAVIGATION_ROOT.ROOT}
          component={MainTabNavigator}
        />
      </AuthenStack.Navigator>
    </Host>
  );
}

export default AppStack;
