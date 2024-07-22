import { fireEvent, render, screen } from '@testing-library/react-native';
import { useAnimatedRef, useSharedValue } from 'react-native-reanimated';
import { ThemeProvider } from '@/theme';
import { MMKV } from 'react-native-mmkv';
import { FlatList } from 'react-native';
import OnboardingButton from './OnboardingButton';
import { AUTHENTICATE_ROUTE } from '@/navigators/navigation/config/routes';

describe('OnboardingButton component should render correctly', () => {
	test('should trigger navigation when pressed at the last index', () => {
		const flatListIndex = useSharedValue(2); // Assuming 2 is the last index for this test
		const x = useSharedValue(1); // Assuming 2 is the last index for this test
		const mockNavigate = jest.fn();
		const navigation = { navigate: mockNavigate };
		const flatListRef = useAnimatedRef<FlatList>();
		const storage = new MMKV();

		const component = (
			<ThemeProvider storage={storage}>
				<OnboardingButton
					navigation={navigation}
					flatListIndex={flatListIndex}
					dataLength={3}
					x={x}
					flatListRef={flatListRef}
				/>
			</ThemeProvider>
		);

		render(component);
		const button = screen.getByTestId('get-started');
		fireEvent.press(button);
		expect(mockNavigate).toHaveBeenCalledWith(AUTHENTICATE_ROUTE.LANDING);
	});

	test('should scroll to next item when not at the last index', () => {
		const flatListIndex = useSharedValue(1); // Assuming 2 is the last index for this test
		const mockNavigate = jest.fn();
		const navigation = { navigate: mockNavigate };
		const flatListRef: any = useAnimatedRef<FlatList>();
		const storage = new MMKV();
		const x = useSharedValue(0); // Assuming 2 is the last index for this test
		// Mock the scrollToIndex method on the flatListRef
		flatListRef.current = {
			scrollToIndex: jest.fn(),
		} as Partial<FlatList<any>>; // Use type assertion here

		const component = (
			<ThemeProvider storage={storage}>
				<OnboardingButton
					navigation={navigation}
					flatListIndex={flatListIndex}
					dataLength={3}
					x={x}
					flatListRef={flatListRef}
				/>
			</ThemeProvider>
		);

		render(component);
		const button = screen.getByTestId('get-started');
		fireEvent.press(button);
		expect(flatListRef.current.scrollToIndex).toHaveBeenCalledWith({
			index: flatListIndex.value + 1,
		});
	});
});
