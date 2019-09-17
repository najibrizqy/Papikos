import React, {Component} from 'react'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'

import LoginScreen from '../Screens/Auth/Login'
import RegisterScreen from '../Screens/Auth/Register'

import HomeScreen from '../Screens/App/Home'
import ChattScreen from '../Screens/App/Chatt'
import HistoryScreen from '../Screens/App/History'
import ProfileScreen from '../Screens/App/Profile'

import Splash from '../Screens/Splash'

import {Icon} from 'native-base';
//Auth Route
const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
},{
  defaultNavigationOptions: {
    header: null
  }
});


//App Route
const AppStack = createStackNavigator({
  Home: HomeScreen,
});

const BottomTab = createBottomTabNavigator({
  Home: {
    screen: AppStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({tintColor}) => (
        <Icon
          type="MaterialCommunityIcons"
          name="Dashboard"
          style={{fontSize: 20, color: tintColor}}
        />
      ),
    }, 
  },

  Chatt: {
    screen: ChattScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({tintColor}) => (
        <Icon
          type="MaterialCommunityIcons"
          name="google-maps"
          style={{fontSize: 20, color: tintColor}}
        />
      ),
    },
  },




},
{
  
})

const AppRoot = createAppContainer(
  createSwitchNavigator(
    {
      Splash : Splash,
      Auth: AuthStack,
      BottomTab :BottomTab,
      App: AppStack,
    },
    {
      initialRouteName: 'Splash',
      headerMode: 'none',
    },
  ),
);

export default AppRoot;