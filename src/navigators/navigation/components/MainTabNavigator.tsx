import {
	BottomTabBarProps,
	createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { HomeScreen } from '@/presenters/home';
import {
	GroupIcon,
	HomeIcon,
	SearchIcon,
	SettingIcon,
} from '@/components/atoms';
import SearchScreen from '@/presenters/search/SearchScreen';
import PublicEvents from '@/presenters/publicEvents/PublicEvents';
import SettingScreen from '@/presenters/settings/SettingScreen';
import { TAB_NAVIGATION_ROOT } from '../config/routes';
import StyledTabBar from './StyledTabBar';
import { tabScreenOptions } from '../config/options';

function MainTabNavigator() {
	const MainTab = createBottomTabNavigator();
	const { t } = useTranslation(['home']);
	const ArrayTabs = [
		{
			name: TAB_NAVIGATION_ROOT.HOME,
			title: t('home'),
			component: HomeScreen,
			icon: <HomeIcon fillProps="#A1A1A1" />,
			iconForcus: <HomeIcon fillProps="#4090FE" />,
		},
		{
			name: TAB_NAVIGATION_ROOT.SEARCH,
			title: t('home'),
			component: SearchScreen,
			icon: <SearchIcon fillProps="#A1A1A1" />,
			iconForcus: <SearchIcon fillProps="#4090FE" />,
		},
		{
			name: TAB_NAVIGATION_ROOT.JOIN,
			title: t('home'),
			component: PublicEvents,
			icon: <GroupIcon fillProps="#A1A1A1" />,
			iconForcus: <GroupIcon fillProps="#4090FE" />,
		},
		{
			name: TAB_NAVIGATION_ROOT.SETTING,
			title: t('home'),
			component: SettingScreen,
			icon: <SettingIcon fillProps="#A1A1A1" />,
			iconForcus: <SettingIcon fillProps="#4090FE" />,
		},
	];
	return (
		<MainTab.Navigator
			screenOptions={tabScreenOptions}
			tabBar={(props: BottomTabBarProps) => <StyledTabBar {...props} />}
		>
			{ArrayTabs.map((item, index) => (
				<MainTab.Screen key={`${index}`} options={{ ...item }} {...item} />
			))}
		</MainTab.Navigator>
	);
}

export default MainTabNavigator;
