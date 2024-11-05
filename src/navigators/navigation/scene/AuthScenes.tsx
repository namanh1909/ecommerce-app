import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Host } from "react-native-portalize";
import OnboardingScreen from "@/presenters/auth/onboarding";
import LadingScreen from "@/presenters/auth/landing";
import { AUTHENTICATE_ROUTE } from "../config/routes";
import navigationConfigs from "../config/options";
import { VerifyAccountScreen } from "@/presenters/auth";
import ActivationAccountScreen from "@/presenters/auth/activationAccount";

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
          name={AUTHENTICATE_ROUTE.ACTIVATION}
          component={VerifyAccountScreen}
        />
        <UnauthenStack.Screen
          name={AUTHENTICATE_ROUTE.SEND_OTP}
          component={ActivationAccountScreen}
        />
      </UnauthenStack.Navigator>
    </Host>
  );
}

export default AuthScenes;
