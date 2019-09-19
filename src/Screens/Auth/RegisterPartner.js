import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TextInput, ScrollView, TouchableOpacity } from "react-native";

import logo from '../../../assets/loginLogo.png'

class Register extends Component {
  constructor(props){
    super(props)
    this.state = {
        formData: {
          labelName: '',
          full_name: '',
          phone_number: '',
          email: '',
          password: '',
          address:''
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
              placeholder="Full name"
              value={formData.full_name}
              onChangeText={(text)=>this.handleChange('full_name',text)}
              style={styles.input}
            />
            <TextInput
              placeholder="Kos name"
              value={formData.labelName}
              onChangeText={(text)=>this.handleChange('labelName',text)}
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
            <TextInput
              placeholder="Adress"
              secureTextEntry
              value={this.state.address}
              onChangeText={(text)=>this.handleChange('address',text)}
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
    flex: 1,
    marginBottom: 20
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