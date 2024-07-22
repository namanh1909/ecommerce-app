import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import Input from './Input';
import { View } from 'react-native';
import { ThemeProvider, useTheme } from '../../../theme';
import { MMKV } from 'react-native-mmkv';
import layout from '@/theme/layout';

describe('Input component should render correctly', () => {
    let storage: MMKV;
    beforeAll(() => {
        storage = new MMKV();
    });

    const onChangeTextMock = jest.fn();

    const defaultProps = {
        customPlaceHolder: 'Enter text',
        label: 'Test Label',
        errorMessage: 'Error message',
        value: '123',
        onChangeText: onChangeTextMock
    };

    const renderWithTheme = (ui: React.ReactNode) => {
        return render(<ThemeProvider storage={storage}>{ui}</ThemeProvider>);
    };

    test('should render label correctly', () => {
        const { getByText } = renderWithTheme(<Input {...defaultProps} />);
        const label = getByText('Test Label');
        expect(label).toBeTruthy();
    });

    test('should render placeholder correctly', () => {
        const { getByPlaceholderText } = renderWithTheme(<Input {...defaultProps} />);
        const placeholder = getByPlaceholderText('Enter text');
        expect(placeholder).toBeTruthy();
    });

    test('should render custom right component', () => {
        const renderRight = () => <View testID="custom-right-component" />;
        const { getByTestId } = renderWithTheme(<Input {...defaultProps} renderRight={renderRight} />);
        const customRightComponent = getByTestId('custom-right-component');
        expect(customRightComponent).toBeTruthy();
    });
});