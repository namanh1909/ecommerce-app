import React from "react";
import { render, screen } from "@testing-library/react-native";
import { MMKV } from "react-native-mmkv";

import { ThemeProvider } from "@/theme";
import NextStepButton from "./NextStepButton";

describe("NextStepButton component should render correctly", () => {
  let storage: MMKV;

  beforeAll(() => {
    storage = new MMKV();
  });

  test("should render NextStepButton component", () => {
    const component = (
      <ThemeProvider storage={storage}>
        <NextStepButton />
      </ThemeProvider>
    );

    render(component);

    const nextStepButtonElement = screen.getByTestId("next-step-button");

    expect(nextStepButtonElement).toBeTruthy();
  });
});
