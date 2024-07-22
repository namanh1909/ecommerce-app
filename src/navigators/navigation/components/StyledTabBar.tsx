import React from 'react';
import {
	Platform,
	View,
	Image,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import Metrics from 'assets/metrics';
import { StyledText, StyledTouchable } from 'components/base';
import { Colors, Sizes, Themes } from 'assets/themes';
import Size from 'assets/sizes';

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
						// accessibilityStates={isFocused ? ['selected'] : []}
						accessibilityLabel={options.tabBarAccessibilityLabel}
						testID={options.tabBarTestID}
						onPress={onPress}
						onLongPress={onLongPress}
						key={route.key}
						style={[styles.tabButton]}
					>
						{isFocused ? options.icon[0] : options.icon[1]}
						{/* <Image
                            source={options?.icon}
                            style={[
                                styles.tabIcon,
                                { tintColor: isFocused ? Themes.COLORS.primary : Themes.COLORS.textPrimary },
                            ]}
                        /> */}
						<StyledText
							customStyle={[
								styles.tabLabel,
								{
									color: isFocused
										? Colors.brandColors.lightBlue
										: Colors.grays.medium,
								},
							]}
							i18nText={options?.title || ''}
						/>
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
		height: '10%',
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
		fontSize: Sizes.FONTSIZE.small,
		fontWeight: '600',
		paddingTop: 8,
	},
});

export default StyledTabBar;
