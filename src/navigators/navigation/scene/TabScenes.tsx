import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { Host } from "react-native-portalize";
import navigationConfigs from "../config/options";
import { AUTHENTICATE_ROUTE } from "../config/routes";
import OnboardingScreen from "@/presenters/auth/Onboard/OnboardScreen";

const AuthenStack = createStackNavigator();

const AppStack = () => (
  <Host>
    <AuthenStack.Navigator screenOptions={navigationConfigs}>
      <AuthenStack.Screen
        name={AUTHENTICATE_ROUTE.ONBOARD}
        component={OnboardingScreen}
      />
    </AuthenStack.Navigator>
  </Host>
);

export default AppStack;
