import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Example, SplashScreen, Startup } from "@/presenters/index";
import { useTheme } from "@/theme";

import type { RootStackParamList } from "@/types/navigation";
import Onboard from "@/presenters/auth/Onboard/Onboard";
import HomeScreen from "@/presenters/home/HomeScreen";

const Stack = createStackNavigator<RootStackParamList>();

function ApplicationNavigator() {
  const { variant, navigationTheme } = useTheme();

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navigationTheme}>
        <Stack.Navigator key={variant} screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Onboard" component={Onboard} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Example" component={Example} />
          <Stack.Screen name="Startup" component={Startup} />
          <Stack.Screen name="Splash" component={SplashScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default ApplicationNavigator;
