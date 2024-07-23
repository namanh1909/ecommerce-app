import { StatusBar, View } from 'react-native';
import type { PropsWithChildren } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useTheme } from '@/theme';

function SafeScreen({ children }: PropsWithChildren) {
	const { layout, variant, navigationTheme } = useTheme();
	const insets = useSafeAreaInsets() || {
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
	};

	return (
		<View
			style={[
				layout.flex_1,
				{
					backgroundColor: navigationTheme.colors.background,
					// Paddings to handle safe area
					paddingTop: insets.top ?? 10,
					paddingBottom: insets.bottom ?? 10,
					paddingLeft: insets.left,
					paddingRight: insets.right,
				},
			]}
		>
			<StatusBar
				barStyle={variant === 'dark' ? 'light-content' : 'dark-content'}
				backgroundColor={navigationTheme.colors.background}
			/>
			{children}
		</View>
	);
}
export default SafeScreen;
