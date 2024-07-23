import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { useTheme } from '@/theme';
import { goBack } from '@/navigators/navigation/NavigationService';
import Header from './Header';

jest.mock('@/theme', () => ({
	useTheme: jest.fn(),
}));

jest.mock('@/navigators/navigation/NavigationService', () => ({
	goBack: jest.fn(),
}));

describe('Header', () => {
	const mockUseTheme = useTheme as jest.Mock;

	beforeEach(() => {
		mockUseTheme.mockReturnValue({
			gutters: { paddingVertical_24: {}, paddingHorizontal_16: {} },
			backgrounds: { white: {} },
			fonts: { medium: {}, size_16: {}, alignCenter: {} },
			layout: {
				row: {},
				itemsCenter: {},
				justifyBetween: {},
				flex_1: {},
				itemsEnd: {},
			},
		});
	});

	it('renders title correctly', () => {
		const { getByText } = render(<Header title="test.title" />);
		expect(getByText('test.title')).toBeTruthy();
	});

	it('calls goBack when back button is pressed', () => {
		const { getByTestId } = render(<Header title="test.title" allowBack />);
		fireEvent.press(getByTestId('back-button'));
		expect(goBack).toHaveBeenCalled();
	});

	it('does not render back button when allowBack is false', () => {
		const { queryByTestId } = render(
			<Header title="test.title" allowBack={false} />,
		);
		expect(queryByTestId('back-button')).toBeNull();
	});

	it('calls onGoBack when back button is pressed', () => {
		const onGoBackMock = jest.fn();
		const { getByTestId } = render(
			<Header title="test.title" allowBack onGoBack={onGoBackMock} />,
		);
		fireEvent.press(getByTestId('back-button'));
		expect(onGoBackMock).toHaveBeenCalled();
	});
});
