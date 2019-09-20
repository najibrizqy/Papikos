import React, {Component} from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Icon, Thumbnail } from 'native-base'

import Header from '../../Components/Header'

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
                                <Text style={{color: 'orange', marginTop: 2, fontSize: 15}}>VVIP</Text>
                            </Text>
                            <Text style={{fontSize: 14, color: 'gray'}}>20 x 20 m</Text>
                            <Text style={{fontSize: 17}}>Rp 500.000 / month</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default DetailBooking

const styles = StyleSheet.create({
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