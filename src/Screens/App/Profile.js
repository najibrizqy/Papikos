import React from 'react';
import {AsyncStorage} from 'react-native';
import {Text} from 'native-base';

export default class Profile extends React.Component {
  render() {
    return (
      <>
        <Text
          onPress={async () => {
            await AsyncStorage.clear();
            this.props.navigation.navigate('Welcome');
          }}>
          Profile : On Development{' '}
        </Text>
      </>
    );
  }
}
