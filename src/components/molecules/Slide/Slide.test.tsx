import { render, screen } from '@testing-library/react-native';
import { useSharedValue } from 'react-native-reanimated';
import { ThemeProvider } from '@/theme';
import { MMKV } from 'react-native-mmkv';
import { OnboardingData } from '@/utils/const';
import Slide from './Slide';

describe('Slide component should render correctly', () => {
	test('should render Slide component', () => {
		const x = useSharedValue(0); // Assuming x is required as a prop for Slide component
		const storage: MMKV = new MMKV();
		const component = (
			<ThemeProvider storage={storage}>
				<Slide index={0} x={x} item={OnboardingData[0]} />
			</ThemeProvider>
		);

		render(component);
		const slideElement = screen.getByTestId('slide');

		expect(slideElement).toBeTruthy();
	});
});
