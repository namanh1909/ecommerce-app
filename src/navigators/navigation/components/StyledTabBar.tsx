import { Text } from '@/components/atoms';
import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

function StyledTabBar({ state, descriptors, navigation }: any) {
	return (
		<View style={styles.tabContainer}>
			{state.routes.map((route: any, index: any) => {
				const { options } = descriptors[route.key];
				const isFocused = state.index === index;
				const onPress = () => {
					console.log(route.key);
					const event = navigation.emit({
						type: 'tabPress',
						target: route.key,
						canPreventDefault: true,
					});

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name);
					}
				};

				const onLongPress = () => {
					navigation.emit({
						type: 'tabLongPress',
						target: route.key,
					});
				};

				return (
					<TouchableOpacity
						activeOpacity={1}
						accessibilityRole="button"
						accessibilityLabel={options.tabBarAccessibilityLabel}
						testID={options.tabBarTestID}
						onPress={onPress}
						onLongPress={onLongPress}
						key={route.key}
						style={[styles.tabButton]}
					>
						{!isFocused ? options.icon : options.iconForcus}
					</TouchableOpacity>
				);
			})}
		</View>
	);
}

const styles = StyleSheet.create({
	tabContainer: {
		flexDirection: 'row',
		// marginBottom: Platform.OS === 'ios' ? Metrics.safeBottomPadding : 0,
		borderTopColor: '#DEE2E6',
		justifyContent: 'space-around',
		// alignItems: Platform.OS === 'ios' ? 'flex-end' : 'center',
		height: '8%',
		backgroundColor: '#ffff',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.46,
		shadowRadius: 5,

		elevation: 17,
	},
	tabButton: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	tabIcon: {
		width: 17,
		height: 17,
		resizeMode: 'contain',
		marginBottom: 5,
	},
	tabLabel: {
		// paddingLeft: Size.PADDING.defaultTextPadding,
		textAlign: 'center',
		// fontSize: Sizes.FONTSIZE.small,
		fontWeight: '600',
		paddingTop: 8,
	},
});

export default StyledTabBar;
