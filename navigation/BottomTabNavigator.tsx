import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
//import { CreateIcon } from '../assets/images/CreateIcon';
//import golfField from "../assets/images/homeGolfField.png";
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/home/HomeScreen';
import ShopScreen from '../screens/shop/ShopScreen';
import SellScreen from '../screens/sell/SellScreen';
import AccountScreen from '../screens/account/AccountScreen';
import { BottomTabParamList, HomeScreenParamList, AccountScreenParamList, ShopScreenParamList, SellScreenParamList, CreateListingParamList } from '../types';
import CreateListingScreen from '../screens/createListing/CreateListingScreen';

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
          tabBarIcon: ( color: string ) => <TabBarIcon name="golf" color="white" />,
        }}
        // options={{ tabBarIcon: ( color: string) => <i source/> }}
      />
      <BottomTab.Screen
        name="Shop"
        component={ShopScreenNavigator}
        options={{
          tabBarIcon: (color: string) => <TabBarIcon name="search-sharp" color="white" />,
        }}
      />
       <BottomTab.Screen
        name="Create"
        component={CreateListingScreenNavigator}
        options={{
          tabBarIcon: (color: string) => <TabBarIcon name="add-circle-outline" color="white" />,
        }}
      />
      <BottomTab.Screen
        name="Selling"
        component={SellScreenNavigator}
        options={{
          tabBarIcon: (color: string) => <TabBarIcon name="pricetag-sharp" color="white" />,
        }}
      />
       <BottomTab.Screen
        name="Account"
        component={AccountScreenNavigator}
        options={{
          tabBarIcon: (color: string) => <TabBarIcon name="person-sharp" color="white" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
export function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: any }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeScreenStack = createStackNavigator<HomeScreenParamList>();
const AccountScreenStack = createStackNavigator<AccountScreenParamList>();
const ShopScreenStack = createStackNavigator<ShopScreenParamList>();
const SellScrenStack = createStackNavigator<SellScreenParamList>();
const CreateListingScreenStack = createStackNavigator<CreateListingParamList>();

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

function CreateListingScreenNavigator() {
  return (
    <CreateListingScreenStack.Navigator>
      <CreateListingScreenStack.Screen
        name="CreateListingScreen"
        component={CreateListingScreen}
        options={{ headerTitle: 'Create New Listing' }}
      />
    </CreateListingScreenStack.Navigator>
  );
}