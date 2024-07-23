import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { useTheme } from '@/theme';
import SocialMediasButton from './SocialMediasButton';
import { FacebookIcon } from '../Icons';
import GoogleIcon from '../Icons/GoogleIcon/GoogleIcon';
import Twittericon from '../Icons/TwitterIcon/TwitterIcon';

jest.mock('@/theme', () => ({
	useTheme: jest.fn(),
}));

describe('SocialMediasButton', () => {
	const mockUseTheme = useTheme as jest.Mock;

	beforeEach(() => {
		mockUseTheme.mockReturnValue({
			layout: { fullWidth: {}, itemsCenter: {} },
			gutters: { paddingVertical_12: {} },
			backgrounds: { facebook: {}, google: {}, twitter: {}, blue: {} },
			borders: { rounded_4: {} },
		});
	});

	it('renders Facebook icon when type is facebook', () => {
		const { getByTestId } = render(<SocialMediasButton type="facebook" />);
		expect(getByTestId('facebook-icon')).toBeTruthy();
	});

	it('renders Google icon when type is google', () => {
		const { getByTestId } = render(<SocialMediasButton type="google" />);
		expect(getByTestId('google-icon')).toBeTruthy();
	});

	it('renders Twitter icon when type is twitter', () => {
		const { getByTestId } = render(<SocialMediasButton type="twitter" />);
		expect(getByTestId('twitter-icon')).toBeTruthy();
	});

	it('calls onPress when button is pressed', () => {
		const onPressMock = jest.fn();
		const { getByTestId } = render(
			<SocialMediasButton type="facebook" onPress={onPressMock} />,
		);
		fireEvent.press(getByTestId('social-btn'));
		expect(onPressMock).toHaveBeenCalled();
	});
});
