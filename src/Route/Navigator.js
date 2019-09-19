import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from '../Screens/App/Home'
import Details from '../Screens/App/Details'
import Addroom from '../Screens/App/Addroom'
import Income from '../Screens/App/Income'
import History from '../Screens/App/History'
import Reguler from '../Screens/App/Reguler'
import VIP from '../Screens/App/VIP'
import VVIP from '../Screens/App/VVIP'
import Premium from '../Screens/App/Premium'
//App Route
const AppStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
  navigationOptions: ({navigation})=>({
    header: null
    })
  },
  Details: {
    screen: Details,
    navigationOptions:({navigation})=>({
      title: 'Details',
      headerStyle:{
        backgroundColor:'#1AB0D3',
      },
      headerTitleStyle:{
        color: 'white'
      },
      headerTintColor:'white'
    })
  },
  Addroom:{
    screen: Addroom,
    navigationOptions:({navigation})=>({
      title: 'Add Room',
      headerStyle:{
        backgroundColor:'#1AB0D3'
      },
      headerTitleStyle:{
        color:'white'
      },
      headerTintColor:'white'
    })
  },
  Income:{
    screen: Income,
    navigationOptions:({navigation})=>({
      title: 'Income',
      headerStyle:{
        backgroundColor:'#1AB0D3'
      },
      headerTitleStyle:{
        color:'white'
      },
      headerTintColor:'white'
    })
  },
  History:{
    screen: History,
    navigationOptions:({navigation})=>({
      title: 'History',
      headerStyle:{
        backgroundColor:'#1AB0D3'
      },
      headerTitleStyle:{
        color:'white'
      },
      headerTintColor:'white'
    })
  },
  Reguler:{
    screen: Reguler,
    navigationOptions:({navigation})=>({
      title: 'Reguler',
      headerStyle:{
        backgroundColor:'#1AB0D3'
      },
      headerTitleStyle:{
        color:'white'
      },
      headerTintColor:'white'
    })
  },
  VIP:{
    screen: VIP,
    navigationOptions:({navigation})=>({
      title: 'VIP',
      headerStyle:{
        backgroundColor:'#1AB0D3'
      },
      headerTitleStyle:{
        color:'white'
      },
      headerTintColor:'white'
    })
  },
  VVIP:{
    screen: VVIP,
    navigationOptions:({navigation})=>({
      title: 'VVIP',
      headerStyle:{
        backgroundColor:'#1AB0D3'
      },
      headerTitleStyle:{
        color:'white'
      },
      headerTintColor:'white'
    })
  },
  Premium:{
    screen: Premium,
    navigationOptions:({navigation})=>({
      title: 'Premium',
      headerStyle:{
        backgroundColor:'#1AB0D3'
      },
      headerTitleStyle:{
        color:'white'
      },
      headerTintColor:'white'
    })
  }
}) 

const AppRoot = createAppContainer(AppStack);

export default AppRoot;