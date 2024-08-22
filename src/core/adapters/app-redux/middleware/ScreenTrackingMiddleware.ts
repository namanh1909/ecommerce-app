/* eslint-disable no-console */
import { CommonActions } from '@react-navigation/native';
// import analytics from '@react-native-firebase/analytics';
import env from 'react-native-config';
import constants from '@/constants';
// gets the current screen from navigation state
// @ts-ignore
const getCurrentRouteName = (navigationState) => {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getCurrentRouteName(route);
  }
  return route.routeName;
};

const screenTracking =
  // @ts-ignore
  ({ getState }) =>
    // @ts-ignore
    (next) =>
      // @ts-ignore
      (action) => {
        if (
          action.type !== CommonActions.navigate &&
          action.type !== CommonActions.goBack
        ) {
          return next(action);
        }
        const currentScreen = getCurrentRouteName(getState().nav);
        const result = next(action);
        const nextScreen = getCurrentRouteName(getState().nav);
        // Set current screen
        // env.ENVIRONMENT === constants.ENVIRONMENT.PRODUCTION &&
        //   analytics().logScreenView({
        //     screen_name: nextScreen,
        //     screen_class: nextScreen,
        //   });
        if (nextScreen !== currentScreen) {
          try {
            // console.tron.log(`NAVIGATING ${currentScreen} to ${nextScreen}`);
            // Example: analytics().trackEvent('user_navigation', {currentScreen, nextScreen})
          } catch (e) {
            // console.tron.log(e);
          }
        }
        return result;
      };

export default screenTracking;