import {
	GestureResponderEvent,
	TouchableOpacity,
	StyleProp,
	ViewStyle,
} from 'react-native';
import React from 'react';
import { useTheme } from '@/theme';
import { FacebookIcon } from '../Icons';
import GoogleIcon from '../Icons/GoogleIcon/GoogleIcon';
import Twittericon from '../Icons/TwitterIcon/TwitterIcon';

type Props = {
	onPress?: ((event: GestureResponderEvent) => void) | undefined;
	type: 'facebook' | 'google' | 'twitter';
	style?: StyleProp<ViewStyle>;
};

function SocialMediasButton(props: Props) {
	const {  onPress, type, style } = props;
	const { layout, gutters, backgrounds, fonts, borders, components } =
		useTheme();

	const getBackgroundColor = () => {
		switch (type) {
			case 'facebook':
				return backgrounds.facebook;
			case 'google':
				return backgrounds.google;
			case 'twitter':
				return backgrounds.twitter;
			default:
				return backgrounds.blue;
		}
	};

	const getIconName = () => {
		switch (type) {
			case 'facebook':
				return <FacebookIcon testID='facebook-icon'/>;
			case 'google':
				return <GoogleIcon testID='google-icon' />;
			case 'twitter':
				return <Twittericon testID='twitter-icon'/>;
			default:
				return <FacebookIcon />;
		}
	};

	return (
		<TouchableOpacity
			testID='social-btn'
			style={[
				layout.fullWidth,
				gutters.paddingVertical_12,
				getBackgroundColor(),
				layout.itemsCenter,
				borders.rounded_4,
				layout.itemsCenter,
				style,
			]}
			onPress={onPress}
		>
			{getIconName()}
		</TouchableOpacity>
	);
}

export default SocialMediasButton;
