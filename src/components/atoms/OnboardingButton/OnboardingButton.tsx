import {
	FlatList,
	StyleSheet,
	TouchableWithoutFeedback,
	useWindowDimensions,
} from 'react-native';
import React from 'react';
import Animated, {
	AnimatedRef,
	SharedValue,
	interpolateColor,
	useAnimatedStyle,
	withSpring,
	withTiming,
} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/types/navigation';
import layout from '@/theme/layout';
import { useTheme } from '@/theme';
import NextStepButton from '../NextStepButton/NextStepButton';

type Props = {
	dataLength: number;
	flatListIndex: SharedValue<number>;
	flatListRef: AnimatedRef<FlatList>;
	x: SharedValue<number>;
};

function OnboardingButton({
	flatListRef,
	flatListIndex,
	dataLength,
	x,
}: Props) {
	const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
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
			navigation.navigate('Home');
		}
	};

	return (
		<TouchableWithoutFeedback onPress={onOnboardPress}>
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
