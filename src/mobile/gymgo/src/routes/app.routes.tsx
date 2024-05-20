import { Platform } from 'react-native';
import { useTheme } from 'native-base';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import HomePng from '@assets/home.png';
import HistoryPng from '@assets/history.png';
import ProfilePng from '@assets/profile.png';

import { Home } from '@screens/Home';
import { Exercise } from '@screens/Exercise';
import { Profile } from '@screens/Profile';
import { History } from '@screens/History';

type AppRoutes = {
    home: undefined;
    exercise: undefined;
    profile: undefined;
    history: undefined;
}

export type AppNavigatorRoutesProp = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
    const { sizes, colors } = useTheme();

    const iconSize = sizes[6];

    return (
        <Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: colors.yellow[500],
            tabBarInactiveTintColor: colors.gray[200],
            tabBarStyle: { 
                backgroundColor: colors.gray[600],
                borderTopWidth: 0,
                height: Platform.OS === 'android' ? 'auto' : 96,
                paddingBottom: sizes[10],
                paddingTop: sizes[6],
            }
        }}>
            <Screen
            name="home"
            component={ Home }
            options={{
                tabBarIcon: ({color}) => (
                    <HomePng  fill={color} width={iconSize} height={iconSize} />
                )
            }}
            />

            <Screen
            name="history"
            component={ History }
            options={{
                tabBarIcon: ({color}) => (
                    <HistoryPng  fill={color} width={iconSize} height={iconSize} />
                )
            }}
            />

            <Screen
            name="profile"
            component={ Profile }
            options={{
                tabBarIcon: ({color}) => (
                    <ProfilePng  fill={color} width={iconSize} height={iconSize} />
                )
            }}
            />

            <Screen
            name="exercise"
            component={ Exercise }
            options={{tabBarButton: () => null }}
            />
        </Navigator>
    );
}