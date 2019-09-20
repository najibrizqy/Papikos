import React from 'react';
import {AsyncStorage} from 'react-native';
import {Text} from 'native-base';

import {logout} from '../../Redux/Action/auth';
import {connect} from 'react-redux';

class Profile extends React.Component {
  render() {
    return (
      <>
        <Text
          onPress={async () => {
            await AsyncStorage.clear();
            await this.props.dispatch(logout());
            this.props.navigation.navigate('Welcome');
          }}>
          Profile : On Development{' '}
        </Text>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Profile);
