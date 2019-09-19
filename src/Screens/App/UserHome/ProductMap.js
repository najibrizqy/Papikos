import React,{Component, Fragment} from 'react'
import { Text, Button, StyleSheet, View } from 'react-native'
import { Container, Icon, Tab, Tabs } from 'native-base'

import MapView from 'react-native-map-clustering'
import { Marker } from 'react-native-maps'

import ProductList from './ProductList'

export default class ProductMap extends Component{
    DummyLocation=[
        {'lat':52.1,'long':18.1, 'title':'Kost Putra Jaya '},
        {'lat':52.4,'long':18.2, 'title':'Kost Atmajaya '},
        {'lat':52.8,'long':18.3, 'title':'Kost Muslimah '},
        {'lat':54.1,'long':19.4, 'title':'Kost Kost Kebalikan '},
        {'lat':54.4,'long':19.5, 'title':'Kost Bogor '},
        {'lat':54.8,'long':19.6, 'title':'Kost Anak ayah '},
        {'lat':55.1,'long':20.7, 'title':'Kost Kemana Aja '},
        {'lat':55.4,'long':20.8, 'title':'Kost Melati '},
        {'lat':55.8,'long':20.9, 'title':'Kost Backend '},
        {'lat':56.1,'long':21.1, 'title':'Kost Kerja '},
        {'lat':56.4,'long':21.2, 'title':'Kost Aaa ini ya '},
        {'lat':56.8,'long':21.3, 'title':'Kost Sakti '}
    ]

    render(){
         return(
            <Container>
                <View style={styles.header}>
                    <View style={styles.searchBar}>
                        <View style={styles.wrapText}>
                            <Icon type="AntDesign" name="arrowleft" style={styles.backIcon} onPress={() => this.props.navigation.goBack()} />
                            <Text style={styles.textBar}>T-Series</Text>
                        </View>
                    </View>
                </View>
                <Tabs style={Platform.OS === 'android' ? { overflow: 'hidden' } : null} tabBarUnderlineStyle={styles.tabsUnderline} locked={true}>
                    <Tab heading="Maps View" tabStyle={styles.color} activeTabStyle={styles.activeTab} textStyle={styles.text} activeTextStyle={styles.activeText} >
                        <MapView  
                            region={{  
                                latitude: 52.5,  
                                longitude: 19.2,  
                                latitudeDelta: 8.5,  
                                longitudeDelta: 8.5,
                            }}  
                            style={{ width: "100%", height: "100%" }}  
                            > 
                            {
                                this.DummyLocation.map((coord,index)=>(
                                    <Marker 
                                        key={index}
                                        coordinate={{ latitude: coord.lat, longitude:  coord.long }}
                                        title={coord.title}
                                        // icon='sesuaikan Icon Disini' 
                                        />  
                                ))
                            }
                            
                        </MapView> 
                    </Tab>
                    <Tab heading="List View" tabStyle={styles.color} activeTabStyle={styles.activeTab} textStyle={styles.text} activeTextStyle={styles.activeText}>
                        <ProductList navigation={this.props.navigation} />
                    </Tab>
                </Tabs>
            </Container>     
         )
     }
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: "#FFF",
        height: 60,
    },
    searchBar:{
        marginTop:10,
        alignSelf: 'center',
        width: '90%',
        height: 50,
        backgroundColor: '#E7E7E7',
        borderRadius: 5
    },
    wrapText:{
        flexDirection: 'row',
        marginTop: 15,
        paddingHorizontal: 15,
    },
    backIcon:{
        color:'#1AB0D3',
        fontSize: 20,
        marginRight: 15
    },
    tabsUnderline:{
        borderColor: '#1AB0D3', 
        borderBottomWidth:2
    },
    activeTab:{
        color:'#1AB0D3',
        backgroundColor:'#FFF'
    },
    text:{
        color: 'gray',
    },
    activeText:{
        color: '#1AB0D3', 
        fontWeight: 'normal'
    },
    color: {
      backgroundColor: '#FFF',
    },
  });