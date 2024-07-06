import { render, screen } from "@testing-library/react-native";
import { ThemeProvider } from "@/theme";
import SafeScreen from "./SafeScreen";
import { MMKV } from "react-native-mmkv";

describe("SafeScreen component should render correctly", () => {
  let storage: MMKV;

  beforeAll(() => {
    storage = new MMKV();
  });

  test("should render SafeScreen component with children", () => {
    const component = (
      <ThemeProvider storage={storage}>
        <SafeScreen>
          <div>Test Child</div>
        </SafeScreen>
      </ThemeProvider>
    );

    render(component);
    const safeScreenElement = screen.getByText("Test Child");

    expect(safeScreenElement).toBeTruthy();
  });
});
