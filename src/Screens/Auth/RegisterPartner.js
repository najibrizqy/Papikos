import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  ToastAndroid,
  TouchableOpacity,
  AsyncStorage,
  Alert,
} from 'react-native';
import {Picker, Icon} from 'native-base';
import {connect} from 'react-redux';
import {registerPartner} from '../../Redux/Action/auth';
import logo from '../../../assets/loginLogo.png';
import {getRegions} from '../../Redux/Action/regions'

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
        id_location: '',

      },
      device_id: '',
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
  };

  handleSubmit = async() => {
    const {formData, device_id} = this.state;
    await this.props.dispatch(registerPartner(formData,device_id)).then(async res => {
      if (res.value.data.status ===200) {
        ToastAndroid.show(
          `${res.value.data.message}`,
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
        this.props.navigation.navigate('LoginPartnerscreen');
      } else {
        Alert.alert('Register Failed!', `${res.value.data.message}`);
      }
    });
  };
  onTypeChange(value) {
    let newFormData = {...this.state.formData};
    newFormData.id_location = value;
    this.setState({
      formData: newFormData,
    });
  }
  componentDidMount = async () => {
    await this.props.dispatch (getRegions())
    const device_id = await AsyncStorage.getItem('idponsel');
    this.setState({device_id});
  };
  render() {
    const {isLoading, formData} = this.state;
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
             <View style={styles.input}>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{
                  width: 235,
                  height: 30,
                  alignSelf: 'center',
                  paddingHorizontal: 20,
                }}
                selectedValue={formData.id_location}
                onValueChange={this.onTypeChange.bind(this)}>
                <Picker.Item label="City" value="" />
                {this.props.regions.Regions.status==200 ?
                this.props.regions.Regions.data.map((item,index)=>{
                    return(
                      <Picker.Item label={item.name} value={item.id_location} key={item.id_location}/>
                    )
                })
                :<Picker.Item label="City" value="" />
              }
              </Picker>
            </View>
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
    regions: state.regions
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
