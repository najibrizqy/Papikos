import React, {Component} from 'react'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'

import WelcomeScreen from '../Screens/Auth/Welcome'
import LoginScreen from '../Screens/Auth/Login'
import RegisterScreen from '../Screens/Auth/Register'

import HomeScreen from '../Screens/App/Home'
import ChatScreen from '../Screens/App/Chat'
import HistoryScreen from '../Screens/App/History'
import ProfileScreen from '../Screens/App/Profile'

import ProductListScreen from '../Screens/App/UserHome/ProductList'
import ProductMapScreen from '../Screens/App/UserHome/ProductMap'
import KosDetailScreen from '../Screens/App/UserHome/KosDetail'

import Splash from '../Screens/Splash'

import {Icon} from 'native-base';

const AuthStack = createStackNavigator({
  Welcome: WelcomeScreen,
  Login: LoginScreen,
  Register: RegisterScreen,
},
  {
    defaultNavigationOptions: {header: null}
  }
);

const AppStack = createStackNavigator({
  Home: HomeScreen,
  ProductList : ProductListScreen,
  ProductMap : {
    screen: ProductMapScreen,
  },
  KosDetail : KosDetailScreen,
},{
    header:null,
    headerMode: 'none',
    navigationOptions: ({navigation}) => {
      let tabBarVisible;
      if (navigation.state.routes.length > 1) {
        navigation.state.routes.map(route => {
          if (route.routeName === "ProductMap" || route.routeName === "KosDetail") {
            tabBarVisible = false;
          } else {
            tabBarVisible = true;
          }
        });
      }
      return {
        tabBarVisible
      };
    },
  }
);


const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: AppStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({tintColor}) => (
        <Icon
          type="MaterialCommunityIcons"
          name="home"
          style={{fontSize: 23, color: tintColor}}
        />
      ),
    }, 
  },
  Chat: {
    screen: ChatScreen,
    navigationOptions: {
      tabBarLabel: 'Chat',
      tabBarIcon: ({tintColor}) => (
        <Icon
          type="MaterialCommunityIcons"
          name="message-text"
          style={{fontSize: 23, color: tintColor}}
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
          name="history"
          style={{fontSize: 23, color: tintColor}}
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
          style={{fontSize: 23, color: tintColor}}
        />
      ),
    },
  },
},
{
  tabBarOptions: {
    activeTintColor: '#34ABC6',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      marginBottom: 3
    }
  } 
})

const AppRoot = createAppContainer(
  createSwitchNavigator(
    {
      Splash : Splash,
      Auth: AuthStack,
      App : AppNavigator,
    },
    {
      initialRouteName: 'Splash',
      headerMode: 'none',
    },
  ),
);

export default AppRoot;