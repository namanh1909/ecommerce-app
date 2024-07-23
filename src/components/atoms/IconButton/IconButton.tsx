import {
	GestureResponderEvent,
	TouchableOpacity,
	StyleProp,
	ViewStyle,
} from 'react-native';
import React, { PropsWithChildren } from 'react';

type IconsButtonProps = PropsWithChildren & {
	onPress?: ((event: GestureResponderEvent) => void) | undefined;
	buttonStyle?: StyleProp<ViewStyle>;
};

function IconButton({ children, onPress, buttonStyle }: IconsButtonProps) {
	return (
		<TouchableOpacity
			testID="button-test"
			style={[buttonStyle]}
			onPress={onPress}
		>
			{children}
		</TouchableOpacity>
	);
}

export default IconButton;
