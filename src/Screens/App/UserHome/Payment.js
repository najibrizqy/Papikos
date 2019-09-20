import React, {Component} from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Icon } from 'native-base'

import payment from '../../../Assets/payment.png'
import bca from '../../../Assets/bca.png'
import bni from '../../../Assets/bni.png'
import permata from '../../../Assets/permata.png'
import mandiri from '../../../Assets/mandiri.png'

class Payment extends Component {

    dummyBank=[
        {image: bca,name: 'BCA'},
        {image: mandiri,name: 'Mandiri'},
        {image: bni,name: 'BNI'},
        {image: permata,name: 'Permata'},
    ]

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerContent}>
                        <Icon type="AntDesign" name="arrowleft" style={styles.backIcon} onPress={() => this.props.navigation.goBack()}/>
                        <Text style={styles.headerTitle}>Payment</Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <Image source={payment} style={styles.paymentImg} />
                    {this.dummyBank.map((res, index) => {
                        return (
                            <TouchableOpacity activeOpacity={0.7} key={index} style={{marginTop: 20}}>
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
    header:{
        height: 50,
        backgroundColor: '#1AB0D3'
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
    headerContent:{
        padding: 12,
        flexDirection: 'row'
    },
    headerTitle:{
        fontSize: 20,
        color: '#FFF',
        marginHorizontal: 15,
        marginBottom: 50
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
    backIcon:{
        fontSize: 25,
        color: '#FFF',
        elevation: 5,
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