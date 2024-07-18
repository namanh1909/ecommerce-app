import "react-native-gesture-handler";
import { MMKV } from "react-native-mmkv";

import { ThemeProvider } from "@/theme";

import ApplicationNavigator from "./navigators/Application";
import "./translations";
import { Provider } from "react-redux";
import { store } from "./core/adapters/app-redux/store";
import i18n from "./translations";
import { I18nextProvider } from "react-i18next";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { RootSiblingParent } from "react-native-root-siblings";

export const storage = new MMKV();

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <ThemeProvider storage={storage}>
          <I18nextProvider i18n={i18n}>
            <RootSiblingParent>
              <ApplicationNavigator />
            </RootSiblingParent>
          </I18nextProvider>
        </ThemeProvider>
      </Provider>
    </GestureHandlerRootView>
  );
}

export default App;
