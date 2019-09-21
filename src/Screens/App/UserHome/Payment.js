import React, {Component} from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'
import { Icon } from 'native-base'
import axios from 'axios'
import Header from '../../Components/Header'

import payment from '../../../Assets/payment.png'
import bca from '../../../Assets/bca.png'
import bni from '../../../Assets/bni.png'
import permata from '../../../Assets/permata.png'
import mandiri from '../../../Assets/mandiri.png'

class Payment extends Component {
    state={
        Booking :[],
        Payment:[]
    }

    dataBank=[
        {image: bca,name: 'BCA'},
        {image: mandiri,name: 'MANDIRI'},
        {image: bni,name: 'BNI'},
        {image: permata,name: 'PERMATA'},
    ]

 

    handleSubmit = async(image,bank) => {
        
        Alert.alert(
            'Confirm',
            'Are you sure to booking this room?',
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'OK', onPress: async () =>{
                await this.CreateBooking()
                await this.CreatePayment(bank)
                this.CreateBooking().then(result=> this.props.navigation.navigate('ConfirmPayment',{bankLogo:image,idPayment:this.state.Payment.data.insertId,MyBank:this.state.Payment.xendit.available_banks,bankCode:bank,Amount:this.state.Payment.xendit.amount})).catch(err=>console.warn(err))
              }},
            ],
            {cancelable: false},
        );
    }

    CreateBooking=async()=>  {
        await axios.post('https://salty-plains-50836.herokuapp.com/booking/',{
            "id_partner":this.props.navigation.getParam('idPartner'),
            "id_user": this.props.navigation.getParam('IdUser'),
            "room_id":this.props.navigation.getParam('IdRoom'),
            "status": "Pending",
            "price": this.props.navigation.getParam('Amount'),
            "startDate":"1999-12-20",
            "endDate":"2000-01-20"
        }).then(result=>{
            this.setState({Booking:result})
        }).catch(err=>console.warn(err))
    }

    CreatePayment =async(bank)=>   {
        await axios.post('http://salty-plains-50836.herokuapp.com/payment',{
            "bookid":'30',
            "paid_amount":'3000001',
            "invoice_id":"test",
            "bank_code":bank,
            "email":"idn@gmail.com",
            "id_user":'12'
         }).then(Datas=>{
            this.setState({Payment:Datas.data})
        }).catch(err=>console.warn(err))
     }

    componentDidMount(){

    }

    render(){
        return(
            <View style={styles.container}>
                <Header title={'Method Payment'} navigation={this.props.navigation}/>
                <View style={styles.content}>
                    <Image source={payment} style={styles.paymentImg} />
                    {this.dataBank.map((res, index) => {
                        return (
                            <TouchableOpacity activeOpacity={0.7} key={index} style={{marginTop: 20}} onPress={() => this.handleSubmit(res.image,res.name)}>
                                <View style={styles.card}>
                                    <Image source={res.image} style={styles.bankIcon} />
                                    <Text style={styles.bankText}>{res.name}</Text>
                                    <Icon type="AntDesign" name="arrowright" style={styles.rightIcon}/>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </View>
        )
    }
}

export default Payment

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF',
    },
    content:{
        backgroundColor: '#FFF',
        alignSelf: 'center',
        marginVertical: 20,
        flexDirection: 'column',
        width: '90%'
    },
    title:{
        fontSize: 17,
        marginTop: 5,
        marginLeft: 15
    },
    card:{
        position: 'relative',
        backgroundColor: '#FFF',
        height: 50,
        borderWidth: 1,
        borderColor: '#E7E7E7',
        borderRadius: 5,
        flexDirection: 'row'
    },
    rightIcon:{
        position: 'absolute',
        right: 10,
        top: 10,
        fontSize: 25,
        color: '#E7E7E7',
        elevation: 5,
    },
    paymentImg:{
        width: 200,
        height: 200,
        alignSelf: 'center'
    },
    bankIcon:{
        width: 55,
        height: 35,
        resizeMode: 'stretch',
        marginTop: 6,
        marginLeft: 10
    },
    bankText:{
        fontSize: 18,
        marginTop: 10,
        marginLeft: 10
    },
})