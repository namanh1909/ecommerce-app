import React from 'react';
import { render } from '@testing-library/react-native';
import ImageBackgroundWrapper from './ImageBackgroundWrapper';
import { ImageSourcePropType, View } from 'react-native';

describe('ImageBackgroundWrapper component should render correctly', () => {
    const source: ImageSourcePropType = { uri: 'https://example.com/image.jpg' };

    test('should render children correctly', () => {
        const component = (
            <ImageBackgroundWrapper source={source}>
                <View testID="child-view" />
            </ImageBackgroundWrapper>
        );

        const { getByTestId } = render(component);

        const childView = getByTestId('child-view');
        expect(childView).toBeTruthy();
    });

    test('should render ImageBackground with correct source', () => {
        const component = (
            <ImageBackgroundWrapper source={source}>
                <View testID="child-view" />
            </ImageBackgroundWrapper>
        );

        const { getByTestId } = render(component);

        const imageBackground = getByTestId('image-background');
        expect(imageBackground.props.source).toEqual(source);
    });
});
