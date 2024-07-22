import { useWindowDimensions } from 'react-native';
import React from 'react';
import Animated, {
	Extrapolation,
	SharedValue,
	interpolate,
	interpolateColor,
	useAnimatedStyle,
} from 'react-native-reanimated';
import { useTheme } from '@/theme';

type Props = {
	index: number;
	x: SharedValue<number>;
};

function DotIndicators({ index, x }: Props) {
	const { width: SCREEN_WIDTH } = useWindowDimensions();
	const { layout, gutters, borders } = useTheme();

	const animatedDotStyle = useAnimatedStyle(() => {
		const widthAnimation = interpolate(
			x.value,
			[
				(index - 1) * SCREEN_WIDTH,
				index * SCREEN_WIDTH,
				(index + 1) * SCREEN_WIDTH,
			],
			[10, 20, 10],
			Extrapolation.CLAMP,
		);

		const opacityAnimation = interpolate(
			x.value,
			[
				(index - 1) * SCREEN_WIDTH,
				index * SCREEN_WIDTH,
				(index + 1) * SCREEN_WIDTH,
			],
			[0.5, 1, 0.5],
			Extrapolation.CLAMP,
		);
		return {
			width: widthAnimation,
			opacity: opacityAnimation,
		};
	});

	const animatedColor = useAnimatedStyle(() => {
		const backgroundColor = interpolateColor(
			x.value,
			[0, SCREEN_WIDTH],
			['#4090FE', '#4090FE'],
		);

		return {
			backgroundColor,
		};
	});

	return (
		<Animated.View
			testID="dot-indicator"
			style={[
				gutters.marginHorizontal_4,
				animatedDotStyle,
				animatedColor,
				borders.rounded_4,
				{ height: 8 },
			]}
		/>
	);
}

export default DotIndicators;
