import { useTheme } from '@/theme';
import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

interface OverlayLoadingProps {
	visible: boolean;
}

const OverlayLoading: React.FC<OverlayLoadingProps> = ({ visible }) => {
	if (!visible) return null;

	const { layout, backgrounds } = useTheme();

	return (
		<View
			style={[
				layout.itemsCenter,
				backgrounds.overlay,
				layout.justifyCenter,
				styles.overlay,
			]}
		>
			<ActivityIndicator size="large" color="#000" />
		</View>
	);
};

const styles = StyleSheet.create({
	overlay: {
		...StyleSheet.absoluteFillObject,
		zIndex: 999,
	},
});

export default OverlayLoading;
