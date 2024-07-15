import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useContext } from "react";

import { Example, SplashScreen, Startup } from "@/presenters/index";
import { useTheme } from "@/theme";
import Onboard from "@/presenters/auth/Onboard/OnboardScreen";
import HomeScreen from "@/presenters/home/HomeScreen";
import { AuthProvider, AuthContext } from "@/contexts/AuthContext";
import AuthStack from "./navigation/scene/AuthScenes";
import AppStack from "./navigation/scene/TabScenes";
import { navigationRef } from "./navigation/NavigationService";

const Stack = createStackNavigator();

function ApplicationNavigator() {
  const { variant, navigationTheme } = useTheme();
  const isAuthenticated = false;

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navigationTheme} ref={navigationRef}>
        <Stack.Navigator key={variant} screenOptions={{ headerShown: false }}>
          {isAuthenticated ? (
            <Stack.Screen name="AppStack" component={AppStack} />
          ) : (
            <Stack.Screen name="Unauthen" component={AuthStack} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <ApplicationNavigator />
    </AuthProvider>
  );
}
