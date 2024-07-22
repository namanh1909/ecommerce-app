import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from '@/theme';
import Container from './Container';
import { MMKV } from 'react-native-mmkv';
import { Text } from 'react-native';

describe('Container component should render correctly', () => {
	let storage: MMKV;

	beforeAll(() => {
		storage = new MMKV();
	});

	test('should render children correctly', () => {
		const component = (
			<ThemeProvider storage={storage}>
				<Container>
					<Text testID="child-text">Hello World</Text>
				</Container>
			</ThemeProvider>
		);

		const { getByTestId } = render(component);

		const childText = getByTestId('child-text');
		expect(childText).toBeTruthy();
		expect(childText.props.children).toBe('Hello World');
	});

	test('should apply custom containerStyle', () => {
		const customStyle = { backgroundColor: 'red' };

		const component = (
			<ThemeProvider storage={storage}>
				<Container containerStyle={customStyle}>
					<Text testID="child-text">Hello World</Text>
				</Container>
			</ThemeProvider>
		);

		const { getByTestId } = render(component);

		const container = getByTestId('container-id');
		expect(container?.props?.style).toContainEqual(customStyle);
	});
});
