import React, {Component} from 'react'
import { View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Icon, Thumbnail, Button, Text, Row, Col } from 'native-base'

import Header from '../../Components/Header'
import bca from '../../../Assets/bca.png'

class DetailBooking extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Header title={'Detail Booking'} navigation={this.props.navigation}/>
                <View style={styles.content}>
                    <View style={styles.kosWrap}>
                        <View style={styles.imageWrap}>
                            <Thumbnail square source={{uri: 'http://fresh.suakaonline.com/wp-content/uploads/2017/04/1490486838098-1024x768.jpg'}} style={styles.thumbnail}/>
                        </View>
                        <View style={styles.infoWrap}>
                            <Text style={styles.kosName}>Kos Arkademy <Icon
                                type="Entypo"
                                name="dot-single"
                                style={styles.dot}
                            />
                                <Text style={styles.typeText}>VVIP</Text>
                            </Text>
                            <Text style={styles.areaText}>20 x 20 m</Text>
                            <Text style={{fontSize: 17}}>Rp 500.000 / month</Text>
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
                                    <Text style={styles.statusWrapper}>Completed</Text>
                                </Col>                                
                            </Row>
                            <Text style={[styles.font13, {marginTop: 20}]}> <Image source={bca} style={styles.bankLogo}/> &nbsp;&nbsp;&nbsp; BCA</Text>
                            <Text style={[styles.font13, {fontWeight: 'bold', marginTop: 5}]}>Invoice <Text style={[styles.font13, {fontWeight: '100'}]}>5d84ad4e748c181f00e17b2c</Text></Text>
                            <Text style={[styles.font13, {fontWeight: 'bold'}]}>Booking Date <Text style={[styles.font13, {fontWeight: '100'}]}>2019-09-20</Text></Text>
                            <Text style={[styles.font13, {fontWeight: 'bold'}]}>Payment Date <Text style={[styles.font13, {fontWeight: '100'}]}>2019-09-20</Text></Text>
                            <Text style={styles.font13}>Amount that should be paid</Text>
                            <Text style={[styles.font13, {fontWeight: 'bold'}]}>Rp 502.500</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default DetailBooking

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