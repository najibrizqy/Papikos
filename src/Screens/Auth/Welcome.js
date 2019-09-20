import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';

import logo from '../../Assets/blueLogo.png';
import gif from '../../Assets/people.gif';

class Welcome extends Component {
  componentDidMount = async () => {
    const logged = await AsyncStorage.getItem('logged');
    if (logged === 'user') {
      this.props.navigation.navigate('Home');
    } else if (logged === 'partner') {
      this.props.navigation.navigate('HomePartner');
    } else {
      return;
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.content}>
            <Text style={styles.title}>
              Welcome to
              <Image source={logo} style={styles.logo} />
            </Text>
            <Text style={styles.description}>
              Help you to find the best boarding house
            </Text>
            <Image
              source={require('../../Assets/people.gif')}
              style={styles.gif}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              style={[styles.buttonContainer, styles.loginButton]}
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={styles.buttonText}>Login as user</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={[styles.buttonContainer, styles.loginButton]}
              onPress={() => this.props.navigation.navigate('LoginPartnerscreen')}>
              <Text style={styles.buttonText}>Login as partner</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Welcome;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  content: {
    width: '85%',
    height: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    flex: 1,
  },
  title: {
    marginBottom: 30,
    color: '#5F6D7A',
    alignSelf: 'center',
    fontSize: 28,
  },
  logo: {
    width: 130,
    height: 33,
    alignSelf: 'center',
  },
  description: {
    marginTop: -15,
    marginBottom: 20,
    alignSelf: 'center',
    color: '#A9A9A9',
    fontSize: 16,
  },
  buttonContainer: {
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
    width: '100%',
    borderRadius: 20,
  },
  loginButton: {
    backgroundColor: '#1C8CD1',
    height: 45,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '100',
  },
  gif: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    marginBottom: 20,
  },
});
