import { render, screen } from "@testing-library/react-native";
import { useSharedValue } from "react-native-reanimated";
import { ThemeProvider } from "@/theme";
import Pagination from "./Pagination";
import { OnboardingData } from "@/utils/const";
import { MMKV } from "react-native-mmkv";

describe("Pagination component should render correctly", () => {
  let storage: MMKV;

  beforeAll(() => {
    storage = new MMKV();
  });
  test("should render correct number of dots based on data length", () => {
    const x = useSharedValue(0);
    const data = Array.from({ length: 3 }, (_, index) => ({ id: index }));

    const component = (
      <ThemeProvider storage={storage}>
        <Pagination data={OnboardingData} x={x} />
      </ThemeProvider>
    );

    render(component);
    const dots = screen.getAllByTestId("dot-indicator");
    expect(dots.length).toBe(data.length);
  });

  test("should not render any dots when data is empty", () => {
    const x = useSharedValue(0);
    const component = (
      <ThemeProvider storage={storage}>
        <Pagination data={[]} x={x} />
      </ThemeProvider>
    );

    render(component);
    const dots = screen.queryAllByTestId("dot-indicator");
    expect(dots.length).toBe(0);
  });
});
