import { useMemo } from 'react';
import { Image, ImageProps, ImageSourcePropType } from 'react-native';

import { useTheme } from '@/theme';

import type { Variant } from '@/types/theme/config';
import layout from '@/theme/layout';

type VariantSource = `source${Capitalize<Exclude<Variant, 'default'>>}`;

type Props = ImageProps & {
	[variant in VariantSource]?: ImageSourcePropType;
};

function ImageBackground({ source: defaultSource, ...props }: Props) {
	const { variant } = useTheme();

	const source = useMemo(() => {
		const sourceVariant = `source${variant
			.charAt(0)
			.toUpperCase()}${variant.slice(1)}` as VariantSource;

		if (variant !== 'default' && props[sourceVariant]) {
			try {
				return props[sourceVariant];
			} catch (e) {
				return defaultSource;
			}
		}
		return defaultSource;
	}, [variant]);

	return (
		<Image
			testID="splash-background-image"
			source={source}
			style={[layout.fullHeight, layout.fullWidth]}
			{...props}
		/>
	);
}
export default ImageBackground;
