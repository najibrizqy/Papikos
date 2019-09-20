import React, { Component } from 'react';
import { Container, Button,Content,Text, Form, Item, Icon,Input, Label,Picker } from 'native-base';
import {StyleSheet,View, Image, } from 'react-native'
import ImagePicker from 'react-native-image-crop-picker';
export default class Editroom extends Component {
    constructor(props){
        super(props)
        this.state = {
          formData: {
            fullname: '',
            labelName: '',
            email:'',
            password:'',
            address:'',
            photos:''
            
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
      }
      onTypeChange(value){
        let newFormData={...this.state.formData}
        newFormData.type=value
      this.setState({
        formData: newFormData
      });
      }
      handleChoosePhoto(){
        ImagePicker.openPicker({
            multiple: false
          }).then(images => {
            let newFormData={...this.state.formData}
            newFormData.photos=images
            this.setState({formData:newFormData})
          });
      }
  render() {
    const {isLoading, formData} = this.state
    let image=formData.photos
    return (
      <Container>
        <Content>
          <Form>
            <Item stackedLabel >
              <Label>Name</Label>
              <Input 
              onChangeText={(text)=>this.handleChange('fullname',text)}/>
            </Item>
            <Item stackedLabel>
              <Label>Kos Name</Label>
              <Input 
              onChangeText={(text)=>this.handleChange('labelName',text)}/>
            </Item>
            <Item stackedLabel>
              <Label>Email</Label>
              <Input 
              onChangeText={(text)=>this.handleChange('email',text)}/>
            </Item>
            <Item stackedLabel>
              <Label>Phone</Label>
              <Input 
              onChangeText={(text)=>this.handleChange('password',text)}/>
            </Item>
            <Item stackedLabel last>
              <Label>Address</Label>
              <Input
              onChangeText={(text)=>this.handleChange('address',text)} />
            </Item>
          </Form>
          <View >
                <Button style={styles.choosebutton} title="Choose Photos" onPress={()=>this.handleChoosePhoto()} >
                    <Text style={styles.buttonText2}>
                            Profile Picture
                    </Text>
                    </Button>
                    <View style={styles.listimage}>
                {formData.photos ?
                        <Image
                        source={{uri:formData.photos.path}}
                        style={styles.photo}
                    />:<View></View>
                }
                </View>
            </View>
          <Button style={styles.button}>
              <Text style={styles.text}>
                    Save changes
              </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
const styles=StyleSheet.create({
button:{
    width: 180,
    alignSelf: 'center',
    marginTop:0,
    justifyContent:'center',
    backgroundColor:'#1C8CD1',
    marginBottom: 20,
},
text:{
    fontSize:17
},
buttonText2: {
    color: '#FFFFFF',
    fontSize: 16,
  },
photo:{
    width: 138,
      height:138,
      marginBottom: 10
  },
  listimage:{
      alignSelf:'center',
      marginBottom: 15,
  },
  choosebutton:{
    paddingVertical: 10,
    width:220,
    height:40,
    marginTop:20,
    marginBottom:20,
    borderRadius:20,
    alignSelf:'center',
    backgroundColor:'#1AB0D3',
    justifyContent:'center',
},
})