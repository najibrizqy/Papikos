import React, {Component} from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Icon} from 'native-base';

import WelcomeScreen from '../Screens/Auth/Welcome';
import LoginScreen from '../Screens/Auth/Login';
import RegisterScreen from '../Screens/Auth/Register';
import HomeScreen from '../Screens/App/Home';
import ChatScreen from '../Screens/App/Chat';
import HistoryScreen from '../Screens/App/History';
import ProfileScreen from '../Screens/App/Profile';
import ProductListScreen from '../Screens/App/UserHome/ProductList';
import ProductMapScreen from '../Screens/App/UserHome/ProductMap';
import KosDetailScreen from '../Screens/App/UserHome/KosDetail';
import PaymentScreen from '../Screens/App/UserHome/Payment';
import ConfirmPaymentScreen from '../Screens/App/UserHome/ConfirmPayment';
import DetailBookingScreen from '../Screens/App/UserHome/DetailBooking';
import Splash from '../Screens/Splash';

import HomePartner from '../Screens/App/HomePartner';
import Details from '../Screens/App/Details';
import Addroom from '../Screens/App/Addroom';
import Income from '../Screens/App/Income';
import HistoryPartner from '../Screens/App/HistoryPartner';
import Reguler from '../Screens/App/Reguler';
import VIP from '../Screens/App/VIP';
import VVIP from '../Screens/App/VVIP';
import Premium from '../Screens/App/Premium';
import LoginPartner from '../Screens/Auth/LoginPartner';
import RegisterPartner from '../Screens/Auth/RegisterPartner';
import Editroom from '../Screens/App/Editroom';
import Editprofile from '../Screens/App/Editprofile';
import EditProfileUser from '../Screens/App/EditProfileUser';
import ListRoom from '../Screens/App/ListRoom';

const AuthStack = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
    LoginPartnerscreen: LoginPartner,
    RegisterPartnerscreen: RegisterPartner,
  },
  {
    defaultNavigationOptions: {header: null},
  },
);
//Route User

const AppStack = createStackNavigator(
  {
    Home: HomeScreen,
    ProductList: ProductListScreen,
    ProductMap: {
      screen: ProductMapScreen,
    },
    KosDetail: {
      screen: KosDetailScreen,
    },
    Payment: {
      screen: PaymentScreen,
    },
    ConfirmPayment: {
      screen: ConfirmPaymentScreen,
    },
    DetailBooking: {
      screen: DetailBookingScreen,
    },
    ListRoom: {screen: ListRoom},
    EditProfileUser: {screen: EditProfileUser},
  },
  {
    header: null,
    headerMode: 'none',
    navigationOptions: ({navigation}) => {
      let tabBarVisible;
      if (navigation.state.routes.length > 1) {
        navigation.state.routes.map(route => {
          if (
            route.routeName === 'ProductMap' ||
            route.routeName === 'KosDetail' ||
            route.routeName === 'Payment' ||
            route.routeName === 'DetailBooking' ||
            route.routeName === 'ListRoom' ||
            route.routeName === 'EditProfileUser' ||
            route.routeName === 'ConfirmPayment'
          ) {
            tabBarVisible = false;
          } else {
            tabBarVisible = true;
          }
        });
      }
      return {
        tabBarVisible,
      };
    },
  },
);

//App Route Partner
const AppPartnerStack = createStackNavigator({
  HomePartner: {
    screen: HomePartner,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  Details: {
    screen: Details,
    navigationOptions: ({navigation}) => ({
      title: 'Details',
      headerStyle: {
        backgroundColor: '#1AB0D3',
      },
      headerTitleStyle: {
        color: 'white',
      },
      headerTintColor: 'white',
    }),
  },
  Addroom: {
    screen: Addroom,
    navigationOptions: ({navigation}) => ({
      title: 'Add Room',
      headerStyle: {
        backgroundColor: '#1AB0D3',
      },
      headerTitleStyle: {
        color: 'white',
      },
      headerTintColor: 'white',
    }),
  },
  Editroom: {
    screen: Editroom,
    navigationOptions: ({navigation}) => ({
      title: 'Edit Room',
      headerStyle: {
        backgroundColor: '#1AB0D3',
      },
      headerTitleStyle: {
        color: 'white',
      },
      headerTintColor: 'white',
    }),
  },
  Editprofile: {
    screen: Editprofile,
    navigationOptions: ({navigation}) => ({
      title: 'Edit Profile',
      headerStyle: {
        backgroundColor: '#1AB0D3',
      },
      headerTitleStyle: {
        color: 'white',
      },
      headerTintColor: 'white',
    }),
  },
  Income: {
    screen: Income,
    navigationOptions: ({navigation}) => ({
      title: 'Income',
      headerStyle: {
        backgroundColor: '#1AB0D3',
      },
      headerTitleStyle: {
        color: 'white',
      },
      headerTintColor: 'white',
    }),
  },
  HistoryPartner: {
    screen: HistoryPartner,
    navigationOptions: ({navigation}) => ({
      title: 'History',
      headerStyle: {
        backgroundColor: '#1AB0D3',
      },
      headerTitleStyle: {
        color: 'white',
      },
      headerTintColor: 'white',
    }),
  },
  Reguler: {
    screen: Reguler,
    navigationOptions: ({navigation}) => ({
      title: 'Reguler',
      headerStyle: {
        backgroundColor: '#1AB0D3',
      },
      headerTitleStyle: {
        color: 'white',
      },
      headerTintColor: 'white',
    }),
  },
  VIP: {
    screen: VIP,
    navigationOptions: ({navigation}) => ({
      title: 'VIP',
      headerStyle: {
        backgroundColor: '#1AB0D3',
      },
      headerTitleStyle: {
        color: 'white',
      },
      headerTintColor: 'white',
    }),
  },
  VVIP: {
    screen: VVIP,
    navigationOptions: ({navigation}) => ({
      title: 'VVIP',
      headerStyle: {
        backgroundColor: '#1AB0D3',
      },
      headerTitleStyle: {
        color: 'white',
      },
      headerTintColor: 'white',
    }),
  },
  Premium: {
    screen: Premium,
    navigationOptions: ({navigation}) => ({
      title: 'Premium',
      headerStyle: {
        backgroundColor: '#1AB0D3',
      },
      headerTitleStyle: {
        color: 'white',
      },
      headerTintColor: 'white',
    }),
  },
});

const AppNavigator = createBottomTabNavigator(
  {
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
        marginBottom: 3,
      },
    },
  },
);

const AppRoot = createAppContainer(
  createSwitchNavigator(
    {
      Splash: Splash,
      Auth: AuthStack,
      App: AppNavigator,
      AppPartner: AppPartnerStack,
    },
    {
      initialRouteName: 'Splash',
      // headerMode: 'none',
    },
  ),
);

export default AppRoot;
