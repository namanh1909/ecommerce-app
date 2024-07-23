import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from '@/theme';
import { MMKV } from 'react-native-mmkv';
import { View, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ReactTestInstance } from 'react-test-renderer';
import SafeScreen from './SafeScreen';

jest.mock('react-native-safe-area-context', () => ({
	useSafeAreaInsets: jest.fn(),
}));

describe('SafeScreen component should render correctly', () => {
	let storage: MMKV;

	beforeAll(() => {
		storage = new MMKV();
	});

	test('should render children correctly', () => {
		const component = (
			<ThemeProvider storage={storage}>
				<SafeScreen>
					<View testID="child-view" />
				</SafeScreen>
			</ThemeProvider>
		);

		const { getByTestId } = render(component);

		const childView = getByTestId('child-view');
		expect(childView).toBeTruthy();
	});
});
