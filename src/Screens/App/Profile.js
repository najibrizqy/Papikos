import React from 'react';
import {Text, Spinner} from 'native-base';
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
    await this.props.dispatch(getAUser(user_id)).then(res => {
      if (res.action.payload.data.status === 400) {
        this.setState({user: []});
        ToastAndroid.show(
          `${res.action.payload.data.message}`,
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
      } else {
        ToastAndroid.show(
          `${res.action.payload.data.message}`,

          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
        this.setState({user: res.action.payload.data.data[0]});
        console.log(this.state.user);
      }
    });
  };
  render() {
    const {user} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text
            style={styles.editProfile}
            onPress={() =>
              this.props.navigation.navigate('EditProfileUser', {item: user})
            }>
            Edit Profile
          </Text>
        </View>
        {this.props.user.isLoading ? (
          <Spinner color="#1C8CD1" style={styles.avatar} />
        ) : (
          <Image style={styles.avatar} source={{uri: `${user.photo}`}} />
        )}
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>{user.fullname}</Text>
          </View>
          <View style={styles.info}>
            <View style={styles.item}>
              <Text style={styles.title}>Username</Text>
              <Text style={styles.itemData}>{user.username}</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.title}>Email</Text>
              <Text style={styles.itemData}>{user.email}</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.title}>Phone Number</Text>
              <Text style={styles.itemData}>{user.phone}</Text>
            </View>
            <TouchableOpacity
              onPress={async () => {
                await AsyncStorage.clear();
                await this.props.dispatch(logout());
                this.props.navigation.navigate('Welcome');
              }}
              style={styles.buttonContainer}>
              <Text
                style={{
                  color: '#FFF',
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}>
                Logout
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Profile);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F7F7',
  },
  header: {
    position: 'relative',
    backgroundColor: '#00BFFF',
    height: 200,
  },
  editProfile: {
    position: 'absolute',
    color: '#FFF',
    top: 10,
    right: 20,
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
  info: {
    marginTop: 5,
    paddingTop: 10,
    height: '100%',
    flexDirection: 'column',
  },
  item: {
    marginHorizontal: 20,
    marginTop: 10,
    backgroundColor: '#FFF',
    height: 60,
    borderRadius: 5,
    elevation: 1,
    flexDirection: 'column',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 13,
    paddingTop: 9,
    paddingLeft: 13,
  },
  itemData: {
    fontSize: 17,
    paddingLeft: 15,
    fontWeight: '100',
    color: '#696969',
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
    alignSelf: 'center',
    marginBottom: 10,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
});
