import React, { Component } from 'react';
import { Container, Button,Content,Text, Form, Item, Icon, Input, Label, Picker, Thumbnail, Spinner } from 'native-base';
import {StyleSheet,View, Image, } from 'react-native'
import ImagePicker from 'react-native-image-crop-picker';
import {connect} from 'react-redux';

import {updateUser} from '../../Redux/Action/user'

class EditProfileUser extends Component {
    constructor(props){
        super(props)
        this.state = {
          formData: props.navigation.getParam('item'),
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

    handleChoosePhoto(){
    ImagePicker.openPicker({
        multiple: false
        }).then(images => {
            let newFormData={...this.state.formData}
            newFormData.photo=images.path
            this.setState({formData:newFormData})
        });
    }

    handleSave = async () => {
        let data = this.state.formData
        console.log("FORM DARTA", data)
        let formData = new FormData()
        formData.append('fullname', data.fullname)
        formData.append('username', data.username)
        formData.append('photos', data.photo)
        formData.append('phone', data.phone)
        formData.append('email', data.email)
        
        await this.props.dispatch(updateUser(data.id, formData))
        .then((res) => {
            ToastAndroid.show(
                `${res.action.payload.data.message}`,
                ToastAndroid.LONG,
                ToastAndroid.CENTER,
            );
            this.props.navigation.navigate("Profile")
        })
        .catch(() => {
            alert("GAGAL")
        })
    }

    render() {
    const {formData} = this.state
    return (
        <Container>
            <View style={styles.img}>
                <Thumbnail  source={{uri: formData.photo}} style={styles.imageProfile} />
                <Text style={{color: '#3498db', marginTop: 5}} onPress={()=>this.handleChoosePhoto()}>Edit Photo</Text>
            </View>
            <Content style={styles.content} >
                <Form>
                    <Item stackedLabel style={styles.bdBottom}>
                        <Label>Full Name</Label>
                        <Input 
                        defaultValue={formData.fullname} 
                        placeholder="Input Full Name" 
                        underlineColorAndroid="#3498db"
                        onChangeText={(text)=>this.handleChange('fullname',text)}/>
                    </Item>
                    <Item stackedLabel style={styles.bdBottom}>
                        <Label>Username</Label>
                        <Input 
                        defaultValue={formData.username}
                        placeholder="Input Username"
                        underlineColorAndroid="#3498db"
                        onChangeText={(text)=>this.handleChange('username',text)}/>
                    </Item>
                    <Item stackedLabel style={styles.bdBottom}>
                        <Label>Email</Label>
                        <Input 
                        defaultValue={formData.email} 
                        placeholder="Input Email"
                        underlineColorAndroid="#3498db"
                        onChangeText={(text)=>this.handleChange('email',text)}/>
                    </Item>
                    <Item stackedLabel style={styles.bdBottom}>
                        <Label>Phone Number</Label>
                        <Input 
                        defaultValue={formData.phone} 
                        keyboardType="number-pad"
                        placeholder="Input Phone" 
                        underlineColorAndroid="#3498db"
                        onChangeText={(text)=>this.handleChange('phone',text)}/>
                    </Item>
                </Form>
                <View style={styles.buttonWrap}>
                    {
                        this.props.user.isLoading ? 
                            <Button info style={styles.btnSave} onPress={this.handleSave} disabled>
                                <Spinner color='white' style={styles.loading} /><Text style={styles.textBtnLoading}> SAVE </Text>
                            </Button>
                        :
                            <Button info style={styles.btnSave} onPress={this.handleSave}>
                                <Text style={styles.textBtnSave}> SAVE </Text>
                            </Button>
                    }
                </View>
            </Content>
        </Container>
    );
  }
}

const mapStateToProps = state => {
    return {
      user: state.user,
    };
};

export default connect (mapStateToProps) (EditProfileUser)

const styles=StyleSheet.create({
    img:{
        marginTop: 20,
        alignItems: 'center'
    },
    content:{
        marginTop: 20,
        marginLeft: 5,
        marginRight: 20,
    },
    imageProfile:{
        width: 120,
        height: 120,
        borderWidth: 5,
        borderColor: "#3498db",
        borderRadius: 100
    },
    btnSave:{
        alignItems: 'flex-start',
        width: 100,
        marginRight: 20
    },
    btnLogout:{
        alignItems: 'flex-end',
        width: 100
    },
    bdBottom:{
        borderBottomWidth:0
    },
    buttonWrap: {
        marginTop: 20,
        flexDirection: 'row',
        marginLeft: 20
    },
    textBtnSave:{
        paddingLeft: 28,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    textBtnSignout:{
        paddingLeft: 20,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    loading:{
        marginTop: -23,
        marginLeft: 5,
        padding: 0
    },
    textBtnLoading:{
        marginTop: 7,
        marginLeft: -20,
        paddingLeft: 0
    },
    toast: {
        margin: 20, 
        borderRadius: 10
    },
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