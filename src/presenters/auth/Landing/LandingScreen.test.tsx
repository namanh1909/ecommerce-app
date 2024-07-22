import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import LadingScreen from './LandingScreen';
import { ThemeProvider } from '@/theme';
import { MMKV } from 'react-native-mmkv';
import { NavigationContainer } from '@react-navigation/native';

jest.mock('react-i18next', () => ({
	useTranslation: jest.fn().mockReturnValue({
		t: (key: string) => key,
	}),
}));

jest.mock('@/navigators/navigation/NavigationService', () => ({
	navigate: jest.fn(),
}));

describe('LadingScreen', () => {
	let storage: MMKV;

	beforeAll(() => {
		storage = new MMKV();
	});

	test('should render correctly', () => {
		const component = (
			<ThemeProvider storage={storage}>
				<NavigationContainer>
					<LadingScreen />
				</NavigationContainer>
			</ThemeProvider>
		);

		const { getByText, getByTestId } = render(component);

		expect(getByText('landing.socialLogin')).toBeTruthy();
		expect(getByTestId('container-id')).toBeTruthy();
	});

	test('should navigate to login screen when "Sign in with email" button is pressed', () => {
		const { navigate } = require('@/navigators/navigation/NavigationService');
		const component = (
			<ThemeProvider storage={storage}>
				<NavigationContainer>
					<LadingScreen />
				</NavigationContainer>
			</ThemeProvider>
		);

		const { getByTestId } = render(component);

		const button = getByTestId('button-test');
		fireEvent.press(button);

		expect(navigate).toHaveBeenCalledWith('@AUTHENTICATE_ROUTE/LOGIN');
	});
});
