/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/ban-ts-comment */

import { Text, TextInput } from 'react-native';
// import { UserRepository } from '../../repository/user';
// import { ContractServices } from '../../services/contract';
// import { RealmDatabase } from '../../services/storage/realm';
// import { UserServices } from '../../services/user';
import DebugConfig from './DebugConfig';
import Injector from './Injector';
import './ReactotronConfig';

// import AppConfig from './AppConfig'

// Allow/disallow font-scaling in app
// @ts-ignore
Text.defaultProps = Text.defaultProps || {};
// @ts-ignore
Text.defaultProps.allowFontScaling = false;
// @ts-ignore
TextInput.defaultProps = TextInput.defaultProps || {};
// @ts-ignore
TextInput.defaultProps.allowFontScaling = false;

if (__DEV__) {
    // If ReactNative's yellow box warnings are too much, it is possible to turn
    // it off, but the healthier approach is to fix the warnings.  =)
    // @ts-ignore
    console.disableYellowBox = !DebugConfig.yellowBox;
}
// Injector.registerSingle("ApiService", ApiService);
// Injector.registerSingle("DBHelper", new RealmDatabase());
// Injector.registerSingle("AuthServices", Injector.get(AuthenServices));
// // Injector.register("AuthServices", () => Injector.get(AuthenServices));
// //Register Single For Repo.
// Injector.registerSingle("UserRepository", Injector.get(UserRepository));

// Injector.registerSingle("UserService", Injector.get(UserServices));
// Injector.registerSingle("ContractService", Injector.get(ContractServices));
export const container = Injector;
