import React, {Component} from 'react';
import {AsyncStorage} from 'react-native';
import AppRoot from './src/Route/Navigator';
import {Root} from 'native-base';
import GeneralStatusBarColor from './src/Components/StatusBar';
import {Provider} from 'react-redux';
import store from './src/Redux/store';
import OneSignal from 'react-native-onesignal';
import audio from 'react-native-sound';

class App extends Component {
  constructor(properties) {
    super(properties);
    OneSignal.init('ea995593-04bb-49e5-8e1c-6f34f33cb271');

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
    OneSignal.enableSound(false);
    OneSignal.inFocusDisplaying(2);
    OneSignal.enableVibrate(true);
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    console.log('Notification received: ', notification);
    const notif = new audio('notification.mp3', audio.MAIN_BUNDLE, err => {
      if (err) {
        return;
      }
      notif.play();
    });
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onIds(device) {
    console.log('Device info: ', device);
    // DeviceId.IDPonsel = device.userId;
    AsyncStorage.setItem('idponsel', device.userId);
    // console.warn(DeviceId.IDPonsel);
  }
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
