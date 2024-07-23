import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { useForm, FormProvider } from 'react-hook-form';
import { MMKV } from 'react-native-mmkv';
import { View } from 'react-native';
import InputForm from './InputForm';
import { ThemeProvider } from '../../../theme';

describe('InputForm component should render correctly', () => {
	let storage: MMKV;
	beforeAll(() => {
		storage = new MMKV();
	});
	const customPlaceHolder = '';
	const renderWithThemeAndForm = (ui: React.ReactNode) => {
		const methods = useForm();
		return render(
			<ThemeProvider storage={storage}>
				<FormProvider {...methods}>{ui}</FormProvider>
			</ThemeProvider>,
		);
	};

	test('should render label correctly', () => {
		const { getByText } = renderWithThemeAndForm(
			<InputForm customPlaceHolder name="testInput" label="Test Label" />,
		);
		const label = getByText('Test Label');
		expect(label).toBeTruthy();
	});

	test('should render placeholder correctly', () => {
		const { getByPlaceholderText } = renderWithThemeAndForm(
			<InputForm name="testInput" customPlaceHolder="Enter text" />,
		);
		const placeholder = getByPlaceholderText('Enter text');
		expect(placeholder).toBeTruthy();
	});

	test('should render custom right component', () => {
		const renderRight = () => <View testID="custom-right-component" />;
		const { getByTestId } = renderWithThemeAndForm(
			<InputForm
				customPlaceHolder
				name="testInput"
				renderRight={renderRight}
			/>,
		);
		const customRightComponent = getByTestId('custom-right-component');
		expect(customRightComponent).toBeTruthy();
	});

	test('should handle text input correctly', () => {
		const { getByTestId } = renderWithThemeAndForm(
			<InputForm name="testInput" customPlaceHolder="Enter text" />,
		);
		const input = getByTestId('inputTestId');
		fireEvent.changeText(input, 'new text');
		expect(input.props.value).toBe('new text');
	});
});
