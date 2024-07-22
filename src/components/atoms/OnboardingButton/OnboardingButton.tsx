import { FlatList, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import Animated, {
	AnimatedRef,
	SharedValue,
	useAnimatedStyle,
	withSpring,
	withTiming,
} from 'react-native-reanimated';
import { useTheme } from '@/theme';
import { AUTHENTICATE_ROUTE } from '@/navigators/navigation/config/routes';
import NextStepButton from '../NextStepButton/NextStepButton';

type Props = {
	dataLength: number;
	flatListIndex: SharedValue<number>;
	flatListRef: AnimatedRef<FlatList>;
	x: SharedValue<number>;
	navigation: { navigate: (route: string) => void }; // Add this line
};

function OnboardingButton({
	flatListRef,
	flatListIndex,
	dataLength,
	x,
	navigation,
}: Props) {
	const {
		layout,
		gutters,
		fonts,
		borders,
		colors,
		backgrounds,
		components,
		navigationTheme,
	} = useTheme();

	const buttonAnimationStyle = useAnimatedStyle(() => {
		return {
			width:
				flatListIndex.value === dataLength - 1
					? withSpring(140)
					: withSpring(60),
			height: 60,
			backgroundColor:
				flatListIndex.value === dataLength - 1
					? '#4090FE'
					: navigationTheme.colors.background,
		};
	});

	const arrowAnimationStyle = useAnimatedStyle(() => {
		return {
			opacity:
				flatListIndex.value === dataLength - 1 ? withTiming(0) : withTiming(1),
			transform: [
				{
					translateX:
						flatListIndex.value === dataLength - 1
							? withTiming(100)
							: withTiming(0),
				},
			],
		};
	});

	const textAnimationStyle = useAnimatedStyle(() => {
		return {
			opacity:
				flatListIndex.value === dataLength - 1 ? withTiming(1) : withTiming(0),
			transform: [
				{
					translateX:
						flatListIndex.value === dataLength - 1
							? withTiming(0)
							: withTiming(-100),
				},
			],
		};
	});

	const onOnboardPress = () => {
		if (flatListIndex.value < dataLength - 1) {
			flatListRef.current?.scrollToIndex({
				index: flatListIndex.value + 1,
			});
		} else {
			navigation.navigate(AUTHENTICATE_ROUTE.LANDING);
		}
	};

	return (
		<TouchableWithoutFeedback testID="get-started" onPress={onOnboardPress}>
			<Animated.View
				style={[
					buttonAnimationStyle,
					layout.fullWidth,
					backgrounds.blue,
					components.buttonHalfCircle,
					gutters.padding_12,
					layout.justifyCenter,
					layout.itemsCenter,
				]}
			>
				<Animated.Text
					style={[
						fonts.white,
						fonts.regular,
						layout.absolute,
						textAnimationStyle,
					]}
				>
					Get Started
				</Animated.Text>
				<Animated.View style={[arrowAnimationStyle]}>
					<NextStepButton onPress={onOnboardPress} />
				</Animated.View>
			</Animated.View>
		</TouchableWithoutFeedback>
	);
}

export default OnboardingButton;
