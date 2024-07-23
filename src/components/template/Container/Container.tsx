import { StyleProp, View, ViewStyle } from 'react-native';
import type { PropsWithChildren } from 'react';

import { useTheme } from '@/theme';

type ContainerProps = PropsWithChildren & {
	containerStyle?: StyleProp<ViewStyle>;
};

function Container({ children, containerStyle }: ContainerProps) {
	const { layout, navigationTheme } = useTheme();

	return (
		<View
			testID="container-id"
			style={[
				layout.flex_1,
				{
					backgroundColor: navigationTheme.colors.background,
					paddingLeft: 10,
					paddingRight: 10,
					paddingBottom: 10,
				},
				containerStyle,
			]}
		>
			{children}
		</View>
	);
}

export default Container;
