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
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import {registerPartner} from '../../Redux/Action/auth';
import logo from '../../../assets/loginLogo.png';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        labelName: '',
        fullname: '',
        phone: '',
        email: '',
        password: '',
        address: '',
        latitude: '-7.7584383',
        longitude: '110.3759749',
        id_location: 2,
      },
      showToast: false,
      isLoading: false,
    };
  }

  handleChange = (name, value) => {
    let newFormData = {...this.state.formData};
    newFormData[name] = value;
    this.setState({
      formData: newFormData,
    });
    console.log(newFormData);
  };

  handleSubmit = async () => {
    const {formData} = this.state;
    console.log('forrm', formData);
    await this.props.dispatch(registerPartner(formData)).then(async res => {
      if (res.action.payload.data.status === 400) {
        Alert.alert('Register Failed!', `${res.action.payload.data.message}`);
      } else {
        const tokenUser = this.props.auth.User.token;
        await AsyncStorage.setItem('tokenUser', tokenUser);
        this.props.navigation.navigate('LoginPartner');
      }
    });
  };

  componentDidMount = async () => {
    const device_id = await AsyncStorage.getItem('idponsel');
    this.setState({device_id});
  };

  render() {
    const {isLoading, formData} = this.state;
    console.log('testt', AsyncStorage.getItem('tokenUser'));
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.content}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.title}>Create your account now</Text>
            <TextInput
              placeholder="Full name"
              value={formData.fullname}
              onChangeText={text => this.handleChange('fullname', text)}
              style={styles.input}
            />
            <TextInput
              placeholder="Kos name"
              value={formData.labelName}
              onChangeText={text => this.handleChange('labelName', text)}
              style={styles.input}
            />
            <TextInput
              placeholder="Phone Number"
              value={formData.phone}
              onChangeText={number => this.handleChange('phone', number)}
              keyboardType="number-pad"
              style={styles.input}
            />
            <TextInput
              placeholder="Email"
              value={formData.email}
              onChangeText={text => this.handleChange('email', text)}
              keyboardType="email-address"
              style={styles.input}
            />
            <TextInput
              placeholder="Password"
              secureTextEntry
              value={this.state.password}
              onChangeText={text => this.handleChange('password', text)}
              style={styles.input}
            />
            <TextInput
              placeholder="Address"
              value={this.state.address}
              onChangeText={text => this.handleChange('address', text)}
              style={styles.input}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              style={[styles.buttonContainer, styles.registerButton]}
              onPress={this.handleSubmit}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            <View style={styles.center}>
              <Text style={styles.bottomText}>
                Already have an account ? &nbsp;
                <Text
                  style={styles.bottomTextLink}
                  onPress={() =>
                    this.props.navigation.navigate('LoginPartner')
                  }>
                  Login
                </Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Register);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#3c1053',
  },
  content: {
    width: '70%',
    height: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    flex: 1,
    marginBottom: 20,
  },
  title: {
    marginBottom: 30,
    color: '#F3F1F3',
    alignSelf: 'center',
    fontSize: 15,
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#ddd6f3',
    width: '100%',
    borderRadius: 10,
    marginBottom: 15,
  },
  logo: {
    width: 180,
    height: 180,
    alignSelf: 'center',
    marginBottom: 5,
  },
  buttonContainer: {
    height: 35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
    width: 160,
    borderRadius: 20,
  },
  registerButton: {
    backgroundColor: '#1C8CD1',
    height: 45,
    fontSize: 20,
    marginVertical: 15,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  center: {
    alignSelf: 'center',
  },
  bottomText: {
    fontSize: 15,
    color: '#ccc',
  },
  bottomTextLink: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
