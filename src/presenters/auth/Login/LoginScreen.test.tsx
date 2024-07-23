import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ThemeProvider } from '@/theme';
import { MMKV } from 'react-native-mmkv';
import { NavigationContainer } from '@react-navigation/native';
import { FormProvider } from 'react-hook-form';
import { useAuth } from '@/hooks';
import LoginScreen from './LoginScreen';

jest.mock('@/hooks', () => ({
	useAuth: jest.fn(),
}));

jest.mock('react-i18next', () => ({
	useTranslation: jest.fn().mockReturnValue({
		t: (key: string) => {
			const translations: any = {
				'auth:signIn': 'Sign In',
				'auth:signUp': 'Sign Up',
				'auth:alreadyHaveAccount': 'Already have an account?',
			};
			return translations[key] || key;
		},
		i18n: {
			changeLanguage: jest.fn(),
			language: 'en',
			languages: ['en'],
			options: {
				resources: {
					en: {
						translation: {
							'auth:signIn': 'Sign In',
							'auth:signUp': 'Sign Up',
							'auth:alreadyHaveAccount': 'Already have an account?',
						},
					},
				},
			},
		},
	}),
}));

describe('LoginScreen', () => {
	let storage: MMKV;
	const mockUseAuth = useAuth as jest.Mock;

	beforeAll(() => {
		storage = new MMKV();
	});

	beforeEach(() => {
		mockUseAuth.mockReturnValue({
			isSignInState: true,
			form: {},
			featureText: 'auth:signIn',
			featureDiffText: 'auth:signUp',
			alreadyHasAccount: 'auth:alreadyHaveAccount',
			onChangeFeature: jest.fn(),
			onSubmit: jest.fn(),
			isProcessing: false,
			t: (key: string) => key,
		});
	});

	test('should render correctly', () => {
		const component = (
			<ThemeProvider storage={storage}>
				<NavigationContainer>
					<LoginScreen />
				</NavigationContainer>
			</ThemeProvider>
		);

		const { getByText, getByTestId } = render(component);

		expect(getByText('Sign In')).toBeTruthy();
		expect(getByText('Already have an account?')).toBeTruthy();
		expect(getByText('Sign Up')).toBeTruthy();
		expect(getByTestId('button-test')).toBeTruthy();
	});

	test('should call onSubmit when the button is pressed', () => {
		const { onSubmit } = mockUseAuth();
		const component = (
			<ThemeProvider storage={storage}>
				<NavigationContainer>
					<LoginScreen />
				</NavigationContainer>
			</ThemeProvider>
		);

		const { getByTestId } = render(component);

		const button = getByTestId('button-test');
		fireEvent.press(button);

		expect(onSubmit).toHaveBeenCalled();
	});

	test('should call onChangeFeature when the feature change text is pressed', () => {
		const { onChangeFeature } = mockUseAuth();
		const component = (
			<ThemeProvider storage={storage}>
				<NavigationContainer>
					<LoginScreen />
				</NavigationContainer>
			</ThemeProvider>
		);

		const { getByText } = render(component);

		const featureChangeText = getByText('Sign Up');
		fireEvent.press(featureChangeText);

		expect(onChangeFeature).toHaveBeenCalled();
	});
});
