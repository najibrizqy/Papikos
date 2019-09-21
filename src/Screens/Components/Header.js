import React, {Component} from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'
import { Icon } from 'native-base'

export default Header = (props) => {
    return(
        <View style={styles.header}>
            <View style={styles.headerContent}>
                <Icon type="AntDesign" name="arrowleft" style={styles.backIcon} onPress={() => props.navigation.goBack()}/>
                <Text style={styles.headerTitle}>{props.title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height: 50,
        backgroundColor: '#1AB0D3'
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
    backIcon:{
        fontSize: 25,
        color: '#FFF',
        elevation: 5,
    },
})