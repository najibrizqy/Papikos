import React, {Component} from 'react'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'

import WelcomeScreen from '../Screens/Auth/Welcome'
import LoginScreen from '../Screens/Auth/Login'
import RegisterScreen from '../Screens/Auth/Register'

import HomeScreen from '../Screens/App/Home'
import ChattScreen from '../Screens/App/Chatt'
import HistoryScreen from '../Screens/App/History'
import ProfileScreen from '../Screens/App/Profile'

import ProductListScreen from '../Screens/App/Home/ProductList'
import ProductMapScreen from '../Screens/App/Home/ProductMap'

import Splash from '../Screens/Splash'

import {Icon} from 'native-base';

const AuthStack = createStackNavigator({
  Welcome: WelcomeScreen,
  Login: LoginScreen,
  Register: RegisterScreen,
},
{defaultNavigationOptions: {header: null}});

const AppStack = createStackNavigator({
  Home: HomeScreen,
  ProductList : ProductListScreen,
  ProductMap : ProductMapScreen,
});


const BottomTab = createBottomTabNavigator({
  Home: {
    screen: AppStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({tintColor}) => (
        <Icon
          type="MaterialCommunityIcons"
          name="home"
          style={{fontSize: 20, color: tintColor}}
        />
      ),
    }, 
  },
  Chatt: {
    screen: ChattScreen,
    navigationOptions: {
      tabBarLabel: 'Chatt',
      tabBarIcon: ({tintColor}) => (
        <Icon
          type="MaterialCommunityIcons"
          name="message-text"
          style={{fontSize: 20, color: tintColor}}
        />
      ),
    },
  },
  History: {
    screen: HistoryScreen,
    navigationOptions: {
      tabBarLabel: 'History',
      tabBarIcon: ({tintColor}) => (
        <Icon
          type="MaterialCommunityIcons"
          name="factory"
          style={{fontSize: 20, color: tintColor}}
        />
      ),
    },
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({tintColor}) => (
        <Icon
          type="MaterialCommunityIcons"
          name="account-circle"
          style={{fontSize: 20, color: tintColor}}
        />
      ),
    },
  },
},
{
  //Navigator Option null
})

const AppRoot = createAppContainer(
  createSwitchNavigator(
    {
      Splash : Splash,
      Auth: AuthStack,
      Bottom :BottomTab,
      App: AppStack,
    },
    {
      initialRouteName: 'Splash',
      headerMode: 'none',
    },
  ),
);

export default AppRoot;