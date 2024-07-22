import React from 'react';
import { render } from '@testing-library/react-native';
import OnboardingScreen from './OnboardScreen';
import { ThemeProvider } from '@/theme';
import { MMKV } from 'react-native-mmkv';
import { NavigationContainer } from '@react-navigation/native';

describe('OnboardingScreen', () => {
    let storage: MMKV;

    beforeAll(() => {
        storage = new MMKV();
    });

    test('should render correctly', () => {
        const component = (
            <ThemeProvider storage={storage}>
                <NavigationContainer>
                    <OnboardingScreen />
                </NavigationContainer>
            </ThemeProvider>
        );

        const { getByTestId } = render(component);

        expect(getByTestId('slider')).toBeTruthy();
    });
});
