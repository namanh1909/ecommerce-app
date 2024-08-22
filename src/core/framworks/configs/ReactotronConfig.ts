/* eslint-disable no-console */
import Reactotron from 'reactotron-react-native';
import { reactotronRedux as reduxPlugin } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';
import Immutable from 'seamless-immutable';
import Config from './DebugConfig';

if (Config.useReactotron) {
  // https://github.com/infinitered/reactotron for more options!
  const reactotron = Reactotron.configure({ name: 'ShopApp' })
    .useReactNative()
    .use(reduxPlugin({ onRestore: Immutable }))
    // @ts-ignore
    .use(sagaPlugin())
    .connect();

  // Let's clear Reactotron on every time we load the app
  reactotron.clear();

  // Totally hacky, but this allows you to not both importing reactotron-react-native
  // on every file.  This is just DEV mode, so no big deal.
  // @ts-ignore
  console.tron = reactotron;
}
