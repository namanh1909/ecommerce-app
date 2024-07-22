import * as React from 'react';
import {
	Text as RNText,
	TextProps as RNTextProps,
	StyleProp,
	TextStyle,
} from 'react-native';
import { useTranslation } from 'react-i18next';

interface TextProps extends RNTextProps {
	i18nKey: any;
	i18nParams?: { [key: string]: any };
	style?: StyleProp<TextStyle>;
}

const Text: React.FC<TextProps> = ({ i18nKey, i18nParams, style, ...rest }) => {
	const { t } = useTranslation();

	return (
		<RNText style={style} {...rest}>
			{t(i18nKey, i18nParams)}
		</RNText>
	);
};

export default Text;
