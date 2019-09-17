import React, { Component, Fragment } from 'react';
import { StyleSheet, View, Text, Image } from "react-native";
import { Container, Content, Form, Item, Input, Button, Toast, Row, Col, Icon, Spinner } from 'native-base';


class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      formData: {
        email: '',
        password: ''
      },
      showToast: false,
      isLoading: false,
    }
  }

  handleSignup = () => {
    this.props.navigation.navigate('Register')
  }

  handleChange = (name, value) => {
    let newFormData = {...this.state.formData}
    newFormData[name] = value
    this.setState({
      formData: newFormData
    })
  }

  handleSubmit = async () => {
    this.props.navigation.navigate('BottomTab')
  }

  render() {
    const {isLoading} = this.state
    return (
      <Container style={styles.container}>
        <Content showsVerticalScrollIndicator={false}>
            <View>
              {/* <Image source={logo} style={styles.logo} /> */}
            </View>
            <Form style={styles.formLogin}>
              <Item rounded style={styles.input}>
                <Icon type="MaterialIcons" name="email" style={styles.iconLabel} />
                <Input 
                  keyboardType='email-address' 
                  placeholder="Email" 
                  autoCompleteType='email' 
                  onChangeText={(text)=>this.handleChange('email',text)} />
              </Item>
              <Item rounded style={styles.input}>
                <Icon type="MaterialIcons" name="lock" style={styles.iconLabel} />
                <Input 
                  secureTextEntry={true} 
                  placeholder="Password" 
                  maxLength={16} 
                  onChangeText={(text)=>this.handleChange('password',text)} />
              </Item>
              <Row>
                <Col>
                  <Text style={styles.btnForgot}>Forgot Password</Text>
                </Col>
              </Row>
                  <Button onPress={this.handleSubmit} full info style={styles.btnLogin}>
                    {isLoading ? <Spinner color='white' style={styles.loading} /> : <Fragment />}<Text style={styles.textLogin}>SIGN IN</Text>
                  </Button>
            </Form>
            <Row>
              <Col>
                <Text style={styles.foot}>Don't have an account? &nbsp;
                  <Text style={styles.btnSignup} onPress={this.handleSignup}>Sign Up</Text>
                </Text>
              </Col>
            </Row>
        </Content>
      </Container>
    );
  }
}


export default Login

let btnSignup = {
  color: '#4B4C72',
}

const styles = StyleSheet.create({
    container: {
      marginLeft: 20,
      marginRight: 20,
      top: 200,
    },
    formLogin: {
      marginTop: 10,
    },
    btnLogin: {
      marginTop: 30,
      borderRadius: 50,
      height: 50,
      elevation: 2
    },
    textLogin: {
      color:"white",
    },
    foot:{
      marginTop: 30,
      marginBottom: 50,
      alignSelf: 'center'
    },
    input:{
      marginTop: 15,
    },
    iconLabel: {
      color: 'gray'
    },
    btnSignup: {
      ...btnSignup,
      fontWeight: 'bold'
    },
    btnForgot: {
      ...btnSignup,
      textAlign: 'right',
      marginTop: 10,
      textDecorationLine: 'underline',
    },
    logo:{
      width: 150, 
      height:150,
      alignSelf: 'center'
    },
    toast: {
      margin: 20, 
      borderRadius: 10
    },
    loading: {
      marginLeft: -35,
      marginRight: 5
    }
});
