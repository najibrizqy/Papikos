import React, {Component} from 'react';
import AppRoot from './src/Route/Navigator'
import { Root } from 'native-base';
import GeneralStatusBarColor from './src/Components/StatusBar';

class App extends Component{
  render(){
    return(
      <Root>
        <GeneralStatusBarColor backgroundColor="#0F73CE" barStyle="default"/>
        <AppRoot />
      </Root>      
    )
  }
}
export default App;