// ImageBackgroundWrapper.tsx
import layout from '@/theme/layout';
import React, { ReactNode } from 'react';
import {
	ImageBackground,
	StyleSheet,
	View,
	ImageSourcePropType,
} from 'react-native';

interface ImageBackgroundWrapperProps {
	source: ImageSourcePropType;
	children: ReactNode;
}

const ImageBackgroundWrapper: React.FC<ImageBackgroundWrapperProps> = ({
	source,
	children,
}) => {
	return (
		<ImageBackground
			testID="image-background"
			source={source}
			style={[
				layout.flex_1,
				layout.fullHeight,
				layout.fullWidth,
				layout.justifyCenter,
				layout.itemsCenter,
			]}
		>
			<View
				style={[
					layout.flex_1,
					layout.fullWidth,
					layout.fullHeight,
					layout.justifyCenter,
					layout.itemsCenter,
				]}
			>
				{children}
			</View>
		</ImageBackground>
	);
};

export default ImageBackgroundWrapper;
