import { render, screen } from "@testing-library/react-native";
import { MMKV } from "react-native-mmkv";

import { ThemeProvider } from "@/theme";
import splashBackground from "@/theme/assets/images/splash_background.png";

import { isImageSourcePropType } from "@/types/guards/image";

import ImageBackground from "./ImageBackground";

describe("ImageBackground component should render correctly", () => {
  let storage: MMKV;

  beforeAll(() => {
    storage = new MMKV();
  });

  test("with only default image background. Should return default source", () => {
    if (!isImageSourcePropType(splashBackground)) {
      throw new Error("Image source is not valid");
    }

    const component = (
      <ThemeProvider storage={storage}>
        <ImageBackground source={splashBackground} />
      </ThemeProvider>
    );

    render(component);

    const wrapper = screen.getByTestId("splash-background-image");

    expect(wrapper.props.source).toBe(splashBackground);
  });
});
