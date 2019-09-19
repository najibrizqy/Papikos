
import React, {Component} from 'react';
import { Root } from 'native-base';
import AppRoot from './src/Route/Navigator'

class App extends Component{
  render(){
    return(
      <Root>
        <AppRoot />
      </Root>      
    )
  }
}
export default App;
