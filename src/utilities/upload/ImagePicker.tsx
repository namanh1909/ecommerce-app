import ActionSheet from '@alessiocancian/react-native-actionsheet';
import { StyledImage, StyledTouchable } from 'components/base';
import React, { memo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
	ActivityIndicator,
	StyleProp,
	StyleSheet,
	TouchableOpacity,
	View,
	ViewStyle,
} from 'react-native';
import { logger } from 'utilities/logger';
import { Themes } from 'assets/themes';
import ImageUploader from './ImageUploader';

interface ImagePickerProp {
	setImage: any;
	image: any;
	children: any;
	customStyleImage?: StyleProp<ViewStyle>;
	customStyle?: StyleProp<ViewStyle>;
}

function ImagePicker(props: ImagePickerProp) {
	const { image, setImage, children } = props;
	const { t } = useTranslation();

	const actionSheet = useRef<any>(null);
	const [loading, setLoading] = useState(false);

	const options = [
		t('authen.register.cancel'),
		t('authen.register.photo'),
		t('authen.register.camera'),
	];
	const showActionSheet = () => {
		actionSheet?.current?.show();
	};

	const pickMainImage = async (index: number) => {
		try {
			setLoading(true);
			const uri = await ImageUploader.pickImage(index);

			setImage(uri || image);
		} catch (err: any) {
			logger('err', err);
		} finally {
			setLoading(false);
		}
	};

	if (loading) {
		return (
			<View style={props.customStyleImage}>
				<ActivityIndicator size="large" color={Themes.COLORS.blue} />
			</View>
		);
	}

	return (
		<>
			<TouchableOpacity style={props.customStyle} onPress={showActionSheet}>
				<View>{children}</View>
			</TouchableOpacity>
			<ActionSheet
				ref={actionSheet}
				options={options}
				cancelButtonIndex={0}
				onPress={(index: any) => {
					if (index !== 0) {
						pickMainImage(index);
					}
				}}
			/>
		</>
	);
}

const styles = StyleSheet.create({
	loading: {
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default memo(ImagePicker);
