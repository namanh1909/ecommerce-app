import { GestureHandlerRootView } from "react-native-gesture-handler";
import { MMKV } from "react-native-mmkv";

import { ThemeProvider } from "@/theme";

import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import { RootSiblingParent } from "react-native-root-siblings";
import ApplicationNavigator from "./navigators/Application";
import i18n from "./translations";
import { store } from "./core/adapters/app-redux/store";

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
