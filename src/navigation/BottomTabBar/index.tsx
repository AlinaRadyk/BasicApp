import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Contacts from 'screens/home/Contacts';
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

  const handleRenderHomeIcon = ({ focused }) => (
    <Overview color={focused ? iconFocusedColor : iconUnFocusedColor} />
  );

  const handleRenderProfileIcon = ({ focused }) => (
    <Settings color={focused ? iconFocusedColor : iconUnFocusedColor} />
  );

  const handleRenderLabel = (focused: boolean, label: string) => (
    <TabBarLabel tabBarLabel={label} focused={focused} focusedColor={iconFocusedColor} />
  );

  return (
    <Tab.Navigator>
      <Tab.Screen
        name={NAV_ROUTES.HOME}
        component={Contacts}
        options={{
          headerTitle: t('contacts'),
          tabBarIcon: handleRenderHomeIcon,
          tabBarLabel: ({ focused }) => handleRenderLabel(focused, t('contacts')),
        }}
      />
      <Tab.Screen
        name={NAV_ROUTES.SETTINGS}
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: handleRenderProfileIcon,
          tabBarLabel: ({ focused }) => handleRenderLabel(focused, t('settings')),
        }}
      />
    </Tab.Navigator>
  );
};
