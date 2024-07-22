import React from 'react';
import { render } from '@testing-library/react-native';
import Text from './Text';
import { useTranslation } from 'react-i18next';

jest.mock('react-i18next', () => ({
	useTranslation: jest.fn(),
}));

describe('Text', () => {
	const mockUseTranslation = useTranslation as jest.Mock;

	beforeEach(() => {
		mockUseTranslation.mockReturnValue({
			t: (key: string, params?: { [key: string]: any }) => {
				if (params) {
					return `${key} ${JSON.stringify(params)}`;
				}
				return key;
			},
		});
	});

	it('renders text with i18nKey', () => {
		const { getByText } = render(<Text i18nKey="test.key" />);
		expect(getByText('test.key')).toBeTruthy();
	});

	it('renders text with i18nKey and i18nParams', () => {
		const { getByText } = render(<Text i18nKey="test.key" i18nParams={{ param: 'value' }} />);
		expect(getByText('test.key {"param":"value"}')).toBeTruthy();
	});

	it('applies style to the text', () => {
		const style = { color: 'red' };
		const { getByText } = render(<Text i18nKey="test.key" style={style} />);
		expect(getByText('test.key').props.style).toEqual(style);
	});
});
