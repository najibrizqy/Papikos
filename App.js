import React, {Component} from 'react';
import AppRoot from './src/Route/Navigator';
import {Root} from 'native-base';
import GeneralStatusBarColor from './src/Components/StatusBar';
import {Provider} from 'react-redux';
import store from './src/Redux/store';

class App extends Component {
  render() {
    return (
      <Root>
        <Provider store={store}>
          <GeneralStatusBarColor backgroundColor="#0F73CE" barStyle="default" />
          <AppRoot />
        </Provider>
      </Root>
    );
  }
}
export default App;
