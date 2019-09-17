import React,{Fragment} from 'react'
import {Text,Button} from 'react-native'


import MapView from 'react-native-map-clustering';
import { Marker } from 'react-native-maps';

export default class ProductMap extends React.Component{
    static navigationOptions = {
        header: null,
    };

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
             <>
               <MapView  
                    region={{  
                        latitude: 52.5,  
                        longitude: 19.2,  
                        latitudeDelta: 8.5,  
                        longitudeDelta: 8.5,
                    }}  
                    style={{ width: 400, height: 800 }}  
                    > 
                    {
                        this.DummyLocation.map((coord,index)=>(
                            <Marker 
                               
                                coordinate={{ latitude: coord.lat, longitude:  coord.long }}
                                title={coord.title}
                               // icon='sesuaikan Icon Disini' 
                               />  
                        ))
                    }

                   
                </MapView>
             </>
             
         )
     }
}