import React from "react";
import { render, screen } from "@testing-library/react-native";
import { MMKV } from "react-native-mmkv";

import { ThemeProvider } from "@/theme";
import { useSharedValue } from "react-native-reanimated";
import DotIndicators from "./DotIndicators";

describe("Dot component should render correctly", () => {
  let storage: MMKV;

  beforeAll(() => {
    storage = new MMKV();
  });

  test("should render dot component with index and x value", () => {
    const index = 0;
    const x = useSharedValue(100);

    const component = (
      <ThemeProvider storage={storage}>
        <DotIndicators index={index} x={x} />
      </ThemeProvider>
    );

    render(component);

    const dotElement = screen.getByTestId("dot-indicator");

    expect(dotElement).toBeTruthy();
  });
});
