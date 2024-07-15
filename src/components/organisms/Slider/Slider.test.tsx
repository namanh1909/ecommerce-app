import { render, screen } from "@testing-library/react-native";
import { useAnimatedRef, useSharedValue } from "react-native-reanimated";
import { ThemeProvider } from "@/theme";
import OnboardingScreen from "./Slider";
import { MMKV } from "react-native-mmkv";
import { OnboardingData } from "@/utils/const";

describe("OnboardingScreen component should render correctly", () => {
  const storage = new MMKV();
  const mockNavigate = jest.fn();
  test("should render with empty data", () => {
    const component = (
      <ThemeProvider storage={storage}>
        <OnboardingScreen data={OnboardingData} />
      </ThemeProvider>
    );

    render(component);
    const flatList = screen.getByTestId("onboarding-flatlist");
    expect(flatList.props.data).toEqual(OnboardingData);
  });

  test("should render with non-empty data", () => {
    const component = (
      <ThemeProvider storage={storage}>
        <OnboardingScreen data={[]} />
      </ThemeProvider>
    );

    render(component);
    const flatList = screen.getByTestId("onboarding-flatlist");
    expect(flatList.props.data).toEqual([]);
  });
});
