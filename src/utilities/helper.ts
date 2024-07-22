/* eslint-disable no-console */
import AsyncStorage from '@react-native-community/async-storage';
import i18next from 'i18next';
import { DevSettings, Platform, Dimensions, StatusBar } from 'react-native';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import Config from 'react-native-config';
import DeviceInfo from 'react-native-device-info';
// import analytics from '@react-native-firebase/analytics';
// import crashlytics from '@react-native-firebase/crashlytics';
import env from 'react-native-config';
// import Constants from 'Constants/index';
// import Crashes, { ErrorAttachmentLog, ExceptionModel } from 'appcenter-crashes';
import lowerCase from 'lodash/lowerCase';
import upperFirst from 'lodash/upperFirst';
import constants from '@/constants';

const normalHitSlop = { right: 7, left: 7, top: 7, bottom: 7 };
const { width, height } = Dimensions.get('window');

// Existing constants and functions
export const isAndroid = Platform.OS === 'android';
export const isIos = Platform.OS === 'ios';

export function wait(timeout: number): Promise<any> {
	return new Promise(resolve => {
		setTimeout(resolve, timeout);
	});
}

export function logger(msg: any, isWarning?: boolean, params?: any): void {
	if (__DEV__ && !isWarning) {
		if (params) console.log(msg, params);
		else console.log(msg);
	}
	if (__DEV__ && isWarning) {
		if (params) console.warn(msg, params);
		else console.warn(msg);
	}
}

export const addMenuClearAsyncStorage = () => {
	if (__DEV__) {
		DevSettings.addMenuItem('Clear AsyncStorage', () => {
			AsyncStorage.clear();
			DevSettings.reload();
		});
	}
};

export function generatePersistConfig(key: string, whitelist: string[]) {
	return {
		key,
		whitelist,
		version: 1,
		debug: __DEV__,
		storage: AsyncStorage,
		stateReconciler: autoMergeLevel2,
	};
}

export const saveDataToAsyncStorage = (
	key: string,
	value: any,
): Promise<void> => {
	return AsyncStorage.setItem(
		key,
		typeof value === 'object' ? JSON.stringify(value) : value,
	);
};

export const getDataFromAsyncStorage = async (key: string): Promise<any> => {
	const value = await AsyncStorage.getItem(key);
	return value ?? null;
};

export const removeItemFromAsyncStorage = async (
	key: string,
): Promise<void> => {
	await AsyncStorage.removeItem(key);
};

export const removeAllItemFromAsyncStorage = async (): Promise<void> => {
	await AsyncStorage.clear();
};

// New helper functions and constants
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const calScale = (size: number) =>
	Math.round((width / guidelineBaseWidth) * size);

const capitalize = (s: string | undefined | null) => {
	if (typeof s !== 'string') return '';
	return s.charAt(0).toUpperCase() + s.slice(1);
};

export default {
	scaleVertical: (size: number) => (height / guidelineBaseHeight) * size,
	scaleHeightComponent: (ratio: number) => height * ratio,
	scaleWidthComponent: (ratio: number) => width * ratio,
	scaleModerate: (size: number, factor = 0.5) =>
		size + (calScale(size) - size) * factor,
	isIos,
	getDeviceType: () => DeviceInfo.getSystemName(),
	getDeviceId: () => DeviceInfo.getUniqueId(),
	getAppVersion: () => DeviceInfo.getVersion(),
	getOsVersion: () => DeviceInfo.getSystemVersion(),
	deviceHasNotch: () => DeviceInfo.hasNotch(),
	saveDataToAsyncStorage,
	getDataFromAsyncStorage,
	removeItemFromAsyncStorage,
	normalHitSlop,
};
