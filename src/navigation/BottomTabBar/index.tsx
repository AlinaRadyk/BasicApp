import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from 'screens/home/Home';
import Profile from 'screens/home/Profile';
import TabBarLabel from 'components/common/TabBarLabel';

import { COLORS } from 'constants/index';
import NAV_ROUTES from 'constants/routes';
import { Settings, Overview } from 'assets/svg';

const Tab = createBottomTabNavigator();

export const BottomTabBar: FC = () => {
  const { t } = useTranslation();

  const iconFocusedColor = COLORS.brand;
  const iconUnFocusedColor = COLORS.tabBarInactiveBackgroundColor;

  return (
    <Tab.Navigator>
      <Tab.Screen
        name={NAV_ROUTES.HOME}
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => <Overview color={focused ? iconFocusedColor : iconUnFocusedColor} />,
          tabBarLabel: ({ focused }) => (
            <TabBarLabel tabBarLabel={t('overview')} focused={focused} focusedColor={iconFocusedColor} />
          ),
        }}
      />
      <Tab.Screen
        name={NAV_ROUTES.SETTINGS}
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => <Settings color={focused ? iconFocusedColor : iconUnFocusedColor} />,
          tabBarLabel: ({ focused }) => (
            <TabBarLabel tabBarLabel={t('settings')} focused={focused} focusedColor={iconFocusedColor} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
