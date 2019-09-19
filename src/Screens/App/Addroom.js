import React, { Component} from 'react';
import { StyleSheet, View, Text, Image, TextInput, ScrollView, TouchableOpacity} from "react-native";
import {Button} from 'native-base'
import {Picker,Icon} from 'native-base'
import ImagePicker from 'react-native-image-crop-picker';


import logo from '../../../assets/papikos-01.png'

class Addroom extends Component {
  constructor(props){
    super(props)
    this.state = {
      formData: {
        name: '',
        price: '',
        area:'',
        gender:'',
        type:'',
        description:'',
        photos:''
        
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
    this.props.navigation.navigate('Bottom')
    
  }
  onGenderChange(value) {
      let newFormData={...this.state.formData}
      newFormData.gender=value
    this.setState({
      formData: newFormData
    });
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
        multiple: true,
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
      <View style={styles.container}>
        <ScrollView >
          <View style={styles.content}>
            <Image source={logo} style={styles.logo}/>
            <TextInput
              placeholder="Name"
              onChangeText={(text)=>this.handleChange('name',text)}
              style={styles.input}
            />
            <TextInput
              placeholder="Price"
              onChangeText={(text)=>this.handleChange('price',text)}
              style={styles.input}
            />
              <TextInput
              placeholder="Room Area"
              onChangeText={(text)=>this.handleChange('area',text)}
              style={styles.input}
            />
            <View style={styles.input}>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: 280,height:30,alignSelf:'center',paddingHorizontal:20 }}
              selectedValue={formData.gender}
              onValueChange={this.onGenderChange.bind(this)}
            >
              <Picker.Item label="Gender" value="" />
              <Picker.Item label="Male" value="Male" />
              <Picker.Item label="Female" value="Female" />
              <Picker.Item label="Mix" value="Mix" />
            </Picker>
            </View>
            <View style={styles.input}>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: 280,height:30,alignSelf:'center',paddingHorizontal:20 }}
              selectedValue={formData.type}
              onValueChange={this.onTypeChange.bind(this)}
            >
              <Picker.Item label="Type" value="" />
              <Picker.Item label="Reguler" value="1" />
              <Picker.Item label="VIP" value="2" />
              <Picker.Item label="VVIP" value="3" />
              <Picker.Item label="Premium" value="4" />
            </Picker>
            </View>
            
              <TextInput
              placeholder="Description"
              onChangeText={(text)=>this.handleChange('email',text)}
              style={styles.description}
            />
            <View >
                <Button style={styles.choosebutton} title="Choose Photos" onPress={()=>this.handleChoosePhoto()} >
                    <Text style={styles.buttonText2}>
                            Choose Photos
                    </Text>
                    </Button>
                    <View style={styles.listimage}>
                {formData.photos ?
                    image.map((item,index)=>{
                        return(
                            <Image
                            key={index}
                        source={{uri:item.path}}
                        style={styles.photo}
                    />
                        )
                        
                    }):<View></View>
                }
                </View>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={[styles.buttonContainer, styles.loginButton]}
              onPress={this.handleSubmit}>
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Addroom
const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      backgroundColor: '#1AB0D3',
    },
    content:{
      width: "100%",
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
      width: 300,
      borderRadius: 10,
      marginBottom: 15,
      alignSelf: 'center'
    },
    photo:{
      width: 138,
        height:138,
        marginBottom: 10
    },
    listimage:{
        paddingHorizontal: 32,
        marginBottom: 15,
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        justifyContent: 'space-between'
    },
    description:{
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#ddd6f3',
        width: 300,
        height: 140,
        borderRadius: 10,
        marginBottom: 15,
        alignSelf: 'center',
        textAlign:'left',
        textAlignVertical:'top'
    },
    logo:{
        width:190,
        height: 50,
        resizeMode:'stretch',
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
    choosebutton:{
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 15,
        width:170,
        height:40,
        borderRadius:20,
        alignSelf:'center',
        backgroundColor:'#1C8CD1',
        justifyContent:'center',
    },
    loginButton: {
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
    buttonText2: {
        color: '#FFFFFF',
        fontSize: 16,
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