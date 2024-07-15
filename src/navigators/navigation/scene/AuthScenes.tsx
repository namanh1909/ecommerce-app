import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { Host } from "react-native-portalize";
import navigationConfigs from "../config/options";
import { AUTHENTICATE_ROUTE } from "../config/routes";
import OnboardingScreen from "@/presenters/auth/Onboard/OnboardScreen";
import LadingScreen from "@/presenters/auth/Landing/LandingScreen";
import LoginScreen from "@/presenters/auth/Login/LoginScreen";

const UnauthenStack = createStackNavigator();

const AuthStack = () => (
  <Host>
    <UnauthenStack.Navigator screenOptions={navigationConfigs}>
      <UnauthenStack.Screen
        name={AUTHENTICATE_ROUTE.LOGIN}
        component={LoginScreen}
      />
      <UnauthenStack.Screen
        name={AUTHENTICATE_ROUTE.ONBOARD}
        component={OnboardingScreen}
      />
      <UnauthenStack.Screen
        name={AUTHENTICATE_ROUTE.LANDING}
        component={LadingScreen}
      />
    </UnauthenStack.Navigator>
  </Host>
);

export default AuthStack;
