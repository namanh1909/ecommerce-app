import { StyleSheet, View } from 'react-native';
import React from 'react';
import { SharedValue } from 'react-native-reanimated';
import Dot from '@/components/atoms/DotIndicators/DotIndicators';
import layout from '@/theme/layout';
import { useTheme } from '@/theme';

type Props = {
	data: [];
	x: SharedValue<number>;
};
function Pagination({ data, x }: Props) {
	const { layout, gutters } = useTheme();

	return (
		<View
			style={[
				layout.row,
				gutters.height_40,
				layout.itemsCenter,
				layout.justifyCenter,
			]}
		>
			{data.map((_, index) => {
				return <Dot index={index} x={x} key={index} />;
			})}
		</View>
	);
}

export default Pagination;
