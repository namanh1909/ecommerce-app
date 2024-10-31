import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { Host } from "react-native-portalize";
import OnboardingScreen from "@/presenters/auth/onBoard/OnboardScreen";
import LadingScreen from "@/presenters/auth/landing/LandingScreen";
import { AUTHENTICATE_ROUTE } from "../config/routes";
import navigationConfigs from "../config/options";
import { SignIn, SignUp } from "@/presenters/auth";

const UnauthenStack = createStackNavigator();

function AuthScenes() {
  return (
    <Host>
      <UnauthenStack.Navigator screenOptions={navigationConfigs}>
        <UnauthenStack.Screen
          name={AUTHENTICATE_ROUTE.ONBOARD}
          component={OnboardingScreen}
        />
        <UnauthenStack.Screen
          name={AUTHENTICATE_ROUTE.LANDING}
          component={LadingScreen}
        />
        <UnauthenStack.Screen
          name={AUTHENTICATE_ROUTE.LOGIN}
          component={SignUp}
        />
        <UnauthenStack.Screen
          name={AUTHENTICATE_ROUTE.REGISTER}
          component={SignIn}
        />
      </UnauthenStack.Navigator>
    </Host>
  );
}

export default AuthScenes;
