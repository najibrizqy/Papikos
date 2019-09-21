import React, { Component } from 'react';
import { Container, Button,Content,Text, Form, Item, Icon,Input, Label,Picker } from 'native-base';
import {StyleSheet,View, Image,AsyncStorage } from 'react-native'
import ImagePicker from 'react-native-image-crop-picker';
import {connect} from 'react-redux'
import {updatePartner} from '../../Redux/Action/partner'
class Editprofile extends Component {
    constructor(props){
        super(props)
        this.state = {
          formData: {
            fullname: '',
            labelName: '',
            email:'',
            address:'',
            photo:'',
            phone:''
            
          },
          typeImage:'',
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
            newFormData.photo=images.path
            this.setState({formData:newFormData,typeImage:images.mime})
          });
      }
      handleChange = (name, value) => {
        let newFormData = {...this.state.formData};
        newFormData[name] = value;
        this.setState({
          formData: newFormData,
        });
      };
    
      handleSave = async() => {
        const {formData, typeImage} = this.state
        let formDataPartner= new FormData()
        formDataPartner.append('fullname',formData.fullname)
        formDataPartner.append('labelName',formData.labelName)
        formDataPartner.append('email',formData.email)
        formDataPartner.append('photo',{
          uri: formData.photo,
          type: typeImage,
          name:'partner.jpg'
        })
        formDataPartner.append('phone',formData.phone)
        const id_partner= parseInt(await AsyncStorage.getItem('partner_id'));
        await this.props.dispatch(updatePartner(formDataPartner,id_partner))
        .then(()=>{
          ToastAndroid.show(
            `Edit profile successfully`,
            ToastAndroid.LONG,
            ToastAndroid.CENTER)
          this.props.navigation.navigate('HomePartner');
        })
      };
  render() {
    const {isLoading, formData} = this.state
    const data=this.props.navigation.getParam('data')
    // let newFormData={
    //   fullname: data.fullname,
    //         labelName: data.labelName,
    //         email:data.email,
    //         address:data.address,
    //         photo:data.photo,
    //         phone:data.phone
    // }
    // this.setState({
    //   formData: newFormData,
    // });
    return (
      <Container>
        <Content>
          <Form>
            <Item stackedLabel >
              <Label>Name</Label>
              <Input 
              placeholder={data.fullname}
              onChangeText={(text)=>this.handleChange('fullname',text)}/>
            </Item>
            <Item stackedLabel>
              <Label>Kos Name</Label>
              <Input 
              placeholder={data.labelName}
              onChangeText={(text)=>this.handleChange('labelName',text)}/>
            </Item>
            <Item stackedLabel>
              <Label>Email</Label>
              <Input 
              placeholder={data.email}
              onChangeText={(text)=>this.handleChange('email',text)}/>
            </Item>
            <Item stackedLabel>
              <Label>Phone</Label>
              <Input 
              placeholder={data.phone}
              onChangeText={(text)=>this.handleChange('phone',text)}/>
            </Item>
            <Item stackedLabel last>
              <Label>Address</Label>
              <Input
              placeholder={data.address}
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
                {formData.photo ?
                        <Image
                        source={{uri:formData.photo}}
                        style={styles.photo}
                    />:<View></View>
                }
                </View>
            </View>
          <Button style={styles.button} onPress={()=>this.handleSave()}>
              <Text style={styles.text}>
                    Save changes
              </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    partner:state.partner
  };
};
export default connect(mapStateToProps)(Editprofile)
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