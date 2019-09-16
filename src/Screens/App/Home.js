import React,{Fragment} from 'react'
import {Text,Button} from 'react-native'
export default class Home extends React.Component{
     render(){
         return(
             <>
                <Text>Test Login</Text>
                <Button onPress={()=>this.props.navigation.navigate('App')} title='Move to Login'/>
             </>
             
         )
     }
}