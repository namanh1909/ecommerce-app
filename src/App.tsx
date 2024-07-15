import "react-native-gesture-handler";
import { MMKV } from "react-native-mmkv";

import { ThemeProvider } from "@/theme";

import ApplicationNavigator from "./navigators/Application";
import "./translations";
import { Provider } from "react-redux";
import { store } from "./core/adapters/app-redux/store";

export const storage = new MMKV();

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider storage={storage}>
        <ApplicationNavigator />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
