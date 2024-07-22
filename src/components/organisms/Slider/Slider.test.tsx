import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { useSharedValue, useAnimatedRef } from 'react-native-reanimated';
import { ThemeProvider } from '@/theme';
import { MMKV } from 'react-native-mmkv';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingScreen from './Slider';

describe('OnboardingScreen component should render correctly', () => {
	let storage: MMKV;

	beforeAll(() => {
		storage = new MMKV();
	});

	test('should render FlatList and OnboardingButton correctly', () => {
		const data = [
			{ id: 1, title: 'Slide 1' },
			{ id: 2, title: 'Slide 2' },
			{ id: 3, title: 'Slide 3' },
		];

		const component = (
			<NavigationContainer>
				<ThemeProvider storage={storage}>
					<OnboardingScreen data={data} />
				</ThemeProvider>
			</NavigationContainer>
		);

		const { getByTestId } = render(component);

		const flatList = getByTestId('onboarding-flatlist');
		expect(flatList).toBeTruthy();

		const button = getByTestId('get-started');
		expect(button).toBeTruthy();
	});
});
