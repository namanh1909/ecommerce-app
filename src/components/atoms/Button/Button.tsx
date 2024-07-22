import {
	GestureResponderEvent,
	TouchableOpacity,
	StyleProp,
	ViewStyle,
	TextStyle,
} from 'react-native';
import React from 'react';
import layout from '@/theme/layout';
import { useTheme } from '@/theme';
import Text from '../Text/Text';

type Props = {
	title: string;
	onPress?: ((event: GestureResponderEvent) => void) | undefined;
	buttonStyle?: StyleProp<ViewStyle>;
	textStyle?: StyleProp<TextStyle>;
};

function Button(props: Props) {
	const { title, onPress, buttonStyle, textStyle } = props;
	const { layout, gutters, backgrounds, fonts, borders, components } =
		useTheme();
	return (
		<TouchableOpacity
			testID='button-test'
			style={[
				layout.fullWidth,
				gutters.paddingVertical_24,
				backgrounds.blue,
				layout.itemsCenter,
				borders.rounded_4,
				buttonStyle,
			]}
			onPress={onPress}
		>
			<Text
				i18nKey={title}
				style={[fonts.medium, fonts.white, textStyle, fonts.size_16]}
			/>
		</TouchableOpacity>
	);
}

export default Button;
