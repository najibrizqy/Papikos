import React, {Component} from 'react'
import { View, StyleSheet, Image, ScrollView, TouchableOpacity, ToastAndroid } from 'react-native'
import { Icon, Thumbnail, Button, Text, Row, Col } from 'native-base'

import Header from '../../Components/Header'

import bca from '../../../Assets/bca.png'
import bni from '../../../Assets/bni.png'
import permata from '../../../Assets/permata.png'
import mandiri from '../../../Assets/mandiri.png'

import {connect} from 'react-redux'
import {getARoom} from '../../../Redux/Action/room'
import axios from 'axios'


class DetailBooking extends Component{
    state = {
        room : [],
        payment:{
            invoice : '',
            bookingDay : '',
            PaymentDate : '',
            amount : '',
            statuss : '',
            mount : '',
        }
    }
    async componentDidMount(){
        
        await this.props.dispatch(getARoom(this.props.navigation.getParam('id_room')))
        this.setState({
            room :this.props.rooms.Rooms.data[0]
        })
         console.log("errrt",this.props.navigation.getParam('id_payment'))

        const id_payment = this.props.navigation.getParam('id_payment')
         await axios.get(`http://salty-plains-50836.herokuapp.com/payment/${id_payment}`)
            .then(result => {
                this.setState({
                    payment:{
                        invoice:JSON.stringify(result.data.xendit.id),
                        bookingDay:JSON.stringify(result.data.result[0].paymentDate),
                        PaymentDate:JSON.stringify(result.data.xendit.expiry_date),
                        amount:JSON.stringify(result.data.xendit.amount),
                        statuss: JSON.stringify(result.data.xendit.status),
                    }
                })
            }).catch(err=>{
                ToastAndroid.show('FAiled to Get Payment',ToastAndroid.SHORT)
            })
    }
  
    render(){
        const {id,name,image,description,price,status,room_area,room_type_id,id_partner}= this.state.room
        const {  invoice,bookingDay,PaymentDate,amount,statuss}= this.state.payment
        console.log(invoice)
        return(
            <View style={styles.container}>
                <Header title={'Detail Booking'} navigation={this.props.navigation}/>
                <View style={styles.content}>
                    <View style={styles.kosWrap}>
                        <View style={styles.imageWrap}>
                            <Thumbnail square source={{uri: image}} style={styles.thumbnail}/>
                        </View>
                        <View style={styles.infoWrap}>
                            <Text style={styles.kosName}>{name }<Icon
                                type="Entypo"
                                name="dot-single"
                                style={styles.dot}
                            />
                                <Text style={styles.typeText}>
                                { 
                                    room_type_id =='1'? 'Reguler':
                                    room_type_id =='2'? 'VIP':
                                    room_type_id =='3'? 'VVIP':
                                    'Premium'

                                }</Text>
                            </Text>
                            <Text style={styles.areaText}>{room_area}</Text>
                            <Text style={{fontSize: 17}}>{price } / month</Text>
                            <View style={styles.btnWrap}>
                                <Button iconLeft transparent bordered style={styles.btnMap}> 
                                    <Icon type="Feather" name="map" style={[styles.btnIcon, {color:'#1C8CD1',}]}/>
                                    <Text style={[styles.btnText, {color:'#1C8CD1'}]}>Maps</Text>
                                </Button>
                                <Button iconLeft style={styles.btnChat}> 
                                    <Icon type="MaterialIcons" name="chat" style={[styles.btnIcon, {marginLeft:15}]}/>
                                    <Text style={styles.btnText}>Chat</Text>
                                </Button>
                            </View>
                        </View>
                    </View>
                    <View style={styles.statusWrap}>
                        <View style={styles.infoBooking}>
                            <Row>
                                <Col>
                                    <Text>Status Booking</Text>
                                </Col>
                                <Col>
                                    <Text style={styles.statusWrapper}>{statuss}</Text>
                                </Col>                                
                            </Row>
                            <Text style={[styles.font13, {marginTop: 20}]}>
                               {
                                  
                                   this.props.navigation.getParam('bank_code') == 'BCA'?  <Image source={bca} style={styles.bankLogo}/> :
                                   this.props.navigation.getParam('bank_code') == 'BRI'?  <Image source={bri} style={styles.bankLogo}/>:
                                   this.props.navigation.getParam('bank_code') == 'MANDIRI'?  <Image source={mandiri} style={styles.bankLogo}/>:
                                   this.props.navigation.getParam('bank_code') == 'PERMATA'?  <Image source={permata} style={styles.bankLogo}/>:
                                   <Image source={permata} style={styles.bankLogo}/> && 'PERMATA'
                               }
                                
                            </Text>
                            <Text style={[styles.font13, {fontWeight: 'bold', marginTop: 5}]}>Invoice <Text style={[styles.font13, {fontWeight: '100'}]}>{invoice}</Text></Text>
                            <Text style={[styles.font13, {fontWeight: 'bold'}]}>Booking Date <Text style={[styles.font13, {fontWeight: '100'}]}>{bookingDay}</Text></Text>
                            <Text style={[styles.font13, {fontWeight: 'bold'}]}>Payment Date <Text style={[styles.font13, {fontWeight: '100'}]}>{PaymentDate}</Text></Text>
                            <Text style={styles.font13}>Amount that should be paid</Text>
                            <Text style={[styles.font13, {fontWeight: 'bold'}]}>Rp. {amount}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
const MSTP = state =>{
    return {
        rooms: state.rooms
      };
}

export default connect(MSTP) (DetailBooking)

const styles = StyleSheet.create({
    statusWrapper: {
        color:'#FFF',
        fontSize: 13,
        paddingHorizontal: 10,
        paddingVertical: 2,
        marginTop: 10,
        backgroundColor: '#109E4A',
        borderRadius: 20,
        alignSelf: 'flex-end'
    },
    headerStatus:{
        flexDirection: 'row',
        width: '100%'
    },
    font13:{
        fontSize: 13
    },
    bankLogo:{
        width: 50,
        height: 30,
        resizeMode: 'stretch',
        marginRight: 30,
    },
    infoBooking:{
        marginHorizontal: 10,
        marginVertical: 10,
    },
    statusWrap:{
        backgroundColor: '#FFF',
        marginTop: 15,
    },
    areaText:{
        fontSize: 14, color: 'gray'
    },
    typeText:{
        color: 'orange', marginTop: 2, fontSize: 15
    },
    btnMap:{
        width:90,
        height: 40, 
        marginRight: 10, 
        borderColor:'#1C8CD1'
    },
    btnChat:{
        width:90, 
        height: 40, 
        backgroundColor: '#1C8CD1'
    },
    btnText:{
        fontSize:12, 
        paddingLeft: 0, 
        paddingRight: 15, 
        margin:0,
        alignSelf: 'center'
    },
    btnIcon:{
        fontSize: 17,
        padding: 0,
        marginLeft:10,
        alignSelf:'center'
    },
    btnWrap:{
        marginTop: 10,
        flexDirection: 'row'
    },
    dot: {
        color: 'gray',
        alignSelf: 'center',
        fontSize: 15,
    },
    kosName:{
        fontSize: 17
    },
    container: {
        height: '100%',
        width: '100%'
    },
    content:{
        width: '100%',
        height: '100%',
        backgroundColor: '#F5F5F5',
    },
    kosWrap:{
        marginTop: 15,
        height: 150,
        backgroundColor: '#FFF',
        paddingHorizontal: 15,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    thumbnail: {
        width: 120,
        height: 120,
        borderRadius: 5,
    },
    imageWrap:{

    },
    infoWrap:{
        marginLeft: 20,
        height: '100%',
        width: '60%'
    }
})