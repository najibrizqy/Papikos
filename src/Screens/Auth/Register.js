import React, { Component, Fragment } from 'react';
import { StyleSheet, View, Text, Image, TextInput, ScrollView, TouchableOpacity } from "react-native";
// import { Icon} from 'native-base';

import logo from '../../Assets/loginLogo.png'

class Register extends Component {
  constructor(props){
    super(props)
    this.state = {
        formData: {
          username: '',
          full_name: '',
          phone_number: '',
          email: '',
          password: '',
          image: 'https://www.shareicon.net/data/2016/09/01/822711_user_512x512.png',
        },
        showToast: false,
        isLoading: false,
      }
  }

  handleChange = (name, value) => {
    let newFormData = {...this.state.formData}
    newFormData[name] = value
    this.setState({
      formData: newFormData
    })
    console.log(newFormData)
  }

  handleChange = (name, value) => {
    let newFormData = {...this.state.formData}
    newFormData[name] = value
    this.setState({
      formData: newFormData
    })
  }

  handleSubmit = async () => {
    this.setState({isLoading:true})
    const {formData} = this.state
  }

  render() {
    const {isLoading, formData} = this.state
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.content}>
            <Image source={logo} style={styles.logo}/>
            <Text style={styles.title}>Create your account now</Text>
            <TextInput
              placeholder="Full Name"
              value={formData.full_name}
              onChangeText={(text)=>this.handleChange('full_name',text)}
              style={styles.input}
            />
            <TextInput
              placeholder="Username"
              value={formData.username}
              onChangeText={(text)=>this.handleChange('username',text)}
              style={styles.input}
            />
            <TextInput
              placeholder="Phone Number"
              value={formData.phone_number}
              onChangeText={(number)=>this.handleChange('phone_number',number)}
              keyboardType='number-pad'
              style={styles.input}
            />
            <TextInput
              placeholder="Email"
              value={formData.email}
              onChangeText={(text)=>this.handleChange('email',text)}
              keyboardType='email-address'
              style={styles.input}
            />
            <TextInput
              placeholder="Password"
              secureTextEntry
              value={this.state.password}
              onChangeText={(text)=>this.handleChange('password',text)}
              style={styles.input}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              style={[styles.buttonContainer, styles.registerButton]}
              onPress={this.submitForm}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            <View style={styles.center}>
              <Text style={styles.bottomText}>Already have an account ? &nbsp;
                <Text
                  style={styles.bottomTextLink}
                  onPress={() => this.props.navigation.navigate('Login')}>
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


export default Register

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: '#1AB0D3',
  },
  content:{
    width: "70%",
    height: "100%",
    justifyContent: 'center',
    alignSelf: 'center',
    flex: 1
  },
  title:{
    marginBottom: 30,
    color: "#F3F1F3",
    alignSelf: 'center',
    fontSize: 15
  },
  input:{
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#ddd6f3',
    width: '100%',
    borderRadius: 10,
    marginBottom: 15,
  },
  logo:{
    width: 180, 
    height:180,
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
    fontWeight: 'bold'
  },
  center:{
    alignSelf: 'center'
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
