import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import Button from './Button';
import { ThemeProvider } from '@/theme';
import { MMKV } from 'react-native-mmkv';

describe('Button component should render correctly', () => {
	let storage: MMKV;

	beforeAll(() => {
		storage = new MMKV();
	});

	test('should render button with correct title', () => {
		const title = 'Test Button';
		const component = (
			<ThemeProvider storage={storage}>
				<Button title={title} />
			</ThemeProvider>
		);

		const { getByText } = render(component);
		const buttonText = getByText(title);
		expect(buttonText).toBeTruthy();
	});

	test('should trigger onPress event when pressed', () => {
		const title = 'Press Me';
		const mockOnPress = jest.fn();
		const component = (
			<ThemeProvider storage={storage}>
				<Button title={title} onPress={mockOnPress} />
			</ThemeProvider>
		);

		const { getByText } = render(component);
		const button = getByText(title);
		fireEvent.press(button);
		expect(mockOnPress).toHaveBeenCalled();
	});
});
