import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useTheme } from '@/theme';
import { AuthSelectors } from '@/core/adapters/app-redux/slices/authSlice';
import { useSelector } from 'react-redux';
import AuthStack from './navigation/scene/AuthScenes';
import AppStack from './navigation/scene/TabScenes';
import { navigationRef } from './navigation/NavigationService';

const Stack = createStackNavigator();

function ApplicationNavigator() {
	const { variant, navigationTheme } = useTheme();
	const user = useSelector(AuthSelectors.user);

	return (
		<SafeAreaProvider>
			<NavigationContainer theme={navigationTheme} ref={navigationRef}>
				<Stack.Navigator key={variant} screenOptions={{ headerShown: false }}>
					{true ? (
						<Stack.Screen name="AppStack" component={AppStack} />
					) : (
						<Stack.Screen name="AuthStack" component={AuthStack} />
					)}
				</Stack.Navigator>
			</NavigationContainer>
		</SafeAreaProvider>
	);
}

export default function App() {
	return <ApplicationNavigator />;
}
