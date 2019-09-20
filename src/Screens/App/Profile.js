import React from 'react';
import {Text} from 'native-base';
import {
  StyleSheet,
  AsyncStorage,
  View,
  Image,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import {logout} from '../../Redux/Action/auth';
import {connect} from 'react-redux';
import {getAUser} from '../../Redux/Action/user';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
    };
  }

  componentDidMount = async () => {
    const user_id = await AsyncStorage.getItem('user_id');
    console.log(user_id);
    await this.props.dispatch(getAUser(user_id)).then(res => {
      console.log(res);
      if (res.action.payload.data.status === 400) {
        this.setState({user: []});
        ToastAndroid.show(
          `${res.action.payload.message}`,
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
      } else {
        ToastAndroid.show(
          `${res.action.payload.message}`,
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
        this.setState({user: res.action.payload.data});
        console.log(this.state.user);
      }
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}></View>
        <Image
          style={styles.avatar}
          source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}
        />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.info}>UX Designer / Mobile developer</Text>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum
              electram expetendis, omittam deseruisse consequuntur ius an,
            </Text>

            <TouchableOpacity style={styles.buttonContainer}>
              <Text>Check History</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={async () => {
                await AsyncStorage.clear();
                await this.props.dispatch(logout());
                this.props.navigation.navigate('Welcome');
              }}
              style={styles.buttonContainer}>
              <Text>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Profile);
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00BFFF',
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130,
  },
  name: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: '600',
  },
  info: {
    fontSize: 16,
    color: '#00BFFF',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
});
