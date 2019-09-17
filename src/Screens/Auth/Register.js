import React, { Component, Fragment } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Container, Content, Form, Item, Input, Button, Toast, Row, Col, Icon, Spinner } from 'native-base';

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
        formData: {
          username: '',
          phone_number: '',
          email: '',
          image: 'https://www.shareicon.net/data/2016/09/01/822711_user_512x512.png',
          password: ''
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
    const {isLoading} = this.state
    return (
        <Container style={styles.container}>
            <Content style={styles.content} showsVerticalScrollIndicator={false}>
                <View>
                </View>
                <Form style={styles.form}>
                    <Item rounded style={styles.input}>
                        <Icon type="MaterialIcons" name="person" style={styles.iconLabel} />
                        <Input
                            maxLength={15} 
                            placeholder="Username" 
                            onChangeText={(text)=>this.handleChange('username',text)}/>
                    </Item>
                    <Item rounded style={styles.input}>
                        <Icon type="MaterialIcons" name="phone" style={styles.iconLabel} />
                            <Input 
                            maxLength={30} 
                            placeholder="Phone Number" 
                            onChangeText={(text)=>this.handleChange('phone_number',text)} />
                    </Item>
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
                    <Button onPress={this.handleSubmit} full info style={styles.btnSignup}>
                        {isLoading ? <Spinner color='white' style={styles.loading} /> : <Fragment />}<Text style={styles.textSignup}>SIGN UP</Text>
                    </Button>
                </Form>
                <Row style={styles.foot}>
                <Col>
                    <TouchableOpacity activeOpacity={.9} style={styles.backWrap} onPress={() => {this.props.navigation.navigate('Login')}}>
                    <Icon type="FontAwesome" name="arrow-left" style={styles.backIcon}/>
                    <Text style={styles.textSignin}>Sign In</Text>  
                    </TouchableOpacity>
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
      marginTop: 40,
      marginRight: 20,
    },
    content:{
      marginLeft: 20,
    },
    form:{
      marginTop: 15,
    },
    btnSignup: {
      marginTop: 30,
      borderRadius: 50,
      height: 50,
    },
    textSignin: {
      color:"gray",
    },
    textSignup: {
      color:"#FFF",
    },
    foot:{
      marginTop: 40,
      marginBottom: 10,
    },
    input:{
      marginTop: 15,
    },
    iconLabel: {
      color: 'gray'
    },
    toast: {
      margin: 20, 
      borderRadius: 10
    },
    backWrap:{
      flexDirection: 'row',
    },
    backIcon:{
      color:'gray',fontSize:15, marginRight: 10
    },
    logo:{
      width: 150, 
      height:150,
      alignSelf: 'center'
    },
    loading: {
      marginLeft: -35,
      marginRight: 5
    }
});
