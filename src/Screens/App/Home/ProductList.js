import React,{ Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Icon } from 'native-base'
import { ScrollView } from 'react-native-gesture-handler'

export default class ProductList extends Component{
    dummyKos=[
        {
            image: 'http://fresh.suakaonline.com/wp-content/uploads/2017/04/1490486838098-1024x768.jpg',
            name: 'Kos Magelangan',
            city: 'Yogyakarta',
            price: '500000',
            status: 'Available'
        },
        {
            image: 'http://fresh.suakaonline.com/wp-content/uploads/2017/04/1490486838098-1024x768.jpg',
            name: 'Kos Magelangan',
            city: 'Yogyakarta',
            price: '500000',
            status: 'Not Available'
        },
        {
            image: 'http://fresh.suakaonline.com/wp-content/uploads/2017/04/1490486838098-1024x768.jpg',
            name: 'Kos Magelangan',
            city: 'Yogyakarta',
            price: '500000',
            status: 'Available'
        },
        {
            image: 'http://fresh.suakaonline.com/wp-content/uploads/2017/04/1490486838098-1024x768.jpg',
            name: 'Kos Magelangan',
            city: 'Yogyakarta',
            price: '500000',
            status: 'Available'
        },
    ]

     render(){
         return(
             <View style={styles.container}>
                 <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.content}>                     
                        {
                            this.dummyKos.map((res, index) => {
                                return(
                                    <View style={styles.card} key={index}>
                                        <Image source={{uri : `${res.image}`}} style={styles.imageCard} />
                                        <View style={styles.bodyCard}>
                                            <View style={styles.titleInfo}>
                                                <Text style={styles.name}>{res.name}</Text>
                                                <Icon type="Entypo" name="dot-single" style={styles.dot} />
                                                <Text style={styles.city}>{res.city}</Text>
                                            </View>
                                            <Text style={styles.price}>Rp {res.price} / month</Text>
                                            <View style={styles.statusWrapper}><Text style={styles.statusText}>{res.status}</Text></View>
                                        </View>
                                    </View>
                                )
                            })
                        }
                    </View>
                 </ScrollView>
             </View>
         )
     }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F5F5F5'
    },
    content:{
        paddingVertical: 20,
    },
    card:{
        marginBottom: 20,
        alignSelf: 'center',
        width: '90%',
        height: 310,
        backgroundColor: '#FFF',
        borderRadius: 5
    },
    imageCard: {
        width: '100%',
        height: 200,
        resizeMode: 'stretch',
        borderRadius: 5,
    },
    bodyCard:{
        padding: 10,
    },
    name:{
        fontSize: 16
    },
    city:{
        fontSize: 15,
        alignSelf: 'flex-end'
    },
    price:{
        marginTop: 5,
        fontSize: 14,
        fontWeight: 'bold',
    },
    statusWrapper: {
        marginTop: 10,
        width: 120,
        backgroundColor: '#109E4A',
        borderRadius: 20
    },
    statusText:{
        color: '#FFF',
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignSelf: 'center'
    },
    titleInfo:{
        flexDirection: 'row',
    },
    dot:{
        color: 'gray',
        alignSelf: 'center',
        fontSize: 15
    }
})