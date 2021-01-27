import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/home/HomeScreen';
import ShopScreen from '../screens/shop/ShopScreen';
import SellScreen from '../screens/sell/SellScreen';
import AccountScreen from '../screens/account/AccountScreen';
import { BottomTabParamList, HomeScreenParamList, AccountScreenParamList, ShopScreenParamList, SellScreenParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreenNavigator}
        options={{
          tabBarIcon: ( color: string ) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Shop"
        component={ShopScreenNavigator}
        options={{
          tabBarIcon: (color: string) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Sell"
        component={SellScreenNavigator}
        options={{
          tabBarIcon: (color: string) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
       <BottomTab.Screen
        name="Account"
        component={AccountScreenNavigator}
        options={{
          tabBarIcon: (color: string) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeScreenStack = createStackNavigator<HomeScreenParamList>();
const AccountScreenStack = createStackNavigator<AccountScreenParamList>();
const ShopScreenStack = createStackNavigator<ShopScreenParamList>();
const SellScrenStack = createStackNavigator<SellScreenParamList>();

function HomeScreenNavigator() {
  return (
    <HomeScreenStack.Navigator>
      <HomeScreenStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: 'Home' }}
      />
    </HomeScreenStack.Navigator>
  );
}

function AccountScreenNavigator() {
  return (
    <AccountScreenStack.Navigator>
      <AccountScreenStack.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{ headerTitle: 'Account Screen' }}
      />
    </AccountScreenStack.Navigator>
  );
}

function ShopScreenNavigator() {
  return (
    <ShopScreenStack.Navigator>
      <ShopScreenStack.Screen
        name="ShopScreen"
        component={ShopScreen}
        options={{ headerTitle: 'Shop Screen' }}
      />
    </ShopScreenStack.Navigator>
  );
}

function SellScreenNavigator() {
  return (
    <SellScrenStack.Navigator>
      <SellScrenStack.Screen
        name="SellScreen"
        component={SellScreen}
        options={{ headerTitle: 'Sell Screen' }}
      />
    </SellScrenStack.Navigator>
  );
}