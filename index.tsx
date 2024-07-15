/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./src/App"; // Ensure this path is correct
import { name as appName } from "./app.json"; // Ensure this path is correct

// if (__DEV__) {
// 	import('./ReactotronConfig');
// }

AppRegistry.registerComponent(appName, () => App);
