import React, { Component } from 'react';
import {View,Text, StyleSheet} from 'react-native'
class Income extends Component{
render(){
    return(
        <View style={styles.container}>
            <Text style={styles.income}>Empty</Text>
        </View>
    )
}
}
export default Income
const styles=StyleSheet.create({
    container:{
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    income:{
        fontSize: 25,
        textAlignVertical:'center',
    }
})