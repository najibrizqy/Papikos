import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import chat from '../../Assets/chat.gif'

class Chat extends React.Component{
    render(){
        return (
           <View style={styles.container}>
               <Text style={styles.title}>Detail</Text>
               <Text style={styles.description}>messages from the partner will appear here</Text>
               <Image 
                    source={require('../../Assets/chat.gif')}  
                    style={styles.gif} 
                />
           </View>
        )
    }
}

export default Chat

const styles = StyleSheet.create({
    container:{
        margin: 15,
    },
    title:{
        fontSize: 25,
        fontWeight: 'bold'
    },
    description:{
        fontSize: 15
    },
    gif:{
        marginTop: 20,
        width: 300,
        height: 300,
        alignSelf: 'center', 
    }
})