import React from 'react';
import { render } from '@testing-library/react-native';
import OverlayLoading from './OverlayLoading';
import { ThemeProvider } from '@/theme';
import { MMKV } from 'react-native-mmkv';

describe('OverlayLoading component should render correctly', () => {
    let storage: MMKV;

    beforeAll(() => {
        storage = new MMKV();
    });

    const renderWithTheme = (ui: React.ReactNode) => {
        return render(<ThemeProvider storage={storage}>{ui}</ThemeProvider>);
    };

    test('should render loading indicator', () => {
        const { getByTestId } = renderWithTheme(<OverlayLoading visible />);
        const loadingIndicator = getByTestId('loading-indicator');
        expect(loadingIndicator).toBeTruthy();
    });

    test('should render with correct styles', () => {
        const { getByTestId } = renderWithTheme(<OverlayLoading visible />);
        const overlay = getByTestId('overlay');
        expect(overlay.props.style).toMatchObject({
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        });
    });
});
