import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { Host } from "react-native-portalize";
import navigationConfigs from "../config/options";
import { APP_ROUTE, AUTHENTICATE_ROUTE } from "../config/routes";
import OnboardingScreen from "@/presenters/auth/Onboard/OnboardScreen";
import HomeScreen from "@/presenters/home/HomeScreen";

const AuthenStack = createStackNavigator();

const AppStack = () => (
  <Host>
    <AuthenStack.Navigator screenOptions={navigationConfigs}>
      <AuthenStack.Screen name={APP_ROUTE.HOME} component={HomeScreen} />
    </AuthenStack.Navigator>
  </Host>
);

export default AppStack;
