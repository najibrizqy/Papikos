import React, {Component} from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Icon } from 'native-base'

import Header from '../../Components/Header'

import bca from '../../../Assets/bca.png'
import bni from '../../../Assets/bni.png'
import permata from '../../../Assets/permata.png'
import mandiri from '../../../Assets/mandiri.png'

class ConfirmPayment extends Component {
    constructor(props){
        super(props)
        this.state={
            logo: props.navigation.getParam('bankLogo'),
            BankData:[],
            AccounNum:'09'
        }
    }


        componentDidMount(){
       

        //console.warn(this.props.navigation.getParam('MyBank'))

        var bc = this.props.navigation.getParam('MyBank')
        

       
       
        var account = bc.filter(bc => bc.bank_code == this.props.navigation.getParam('bankCode'))[0]
        console.warn(account.bank_account_number)
         this.setState({
            AccounNum :account.bank_account_number
         })
    }
    
    Item=[
        {text: 'Masukkan kartu ATM dan pilih "Bahasa Indonesia"'},
        {text: 'Ketik nomor PIN kartu ATM '},
        {text: 'Pilih menu "BAYAR/BELI", kemudian pilih menu "MULTI PAYMENT"'},
        {text: 'Ketik kode perusahaan, yaitu  (88608 XENDIT), tekan "BENAR"'},
        {text: `Masukkan nomor Virtual Account `},
        {text: 'Isi NOMINAL kemudian tekan "BENAR"'},
        {text: 'Muncul konfirmasi data customer. Pilih Nomor 1 sesuai tagihan yang akan dibayar, kemudian tekan "YA"'},
        {text: 'Muncul konfirmasi pembayaran. Tekan "YA" untuk melakukan pembayaran'},
        {text: 'Bukti pembayaran dalam bentuk struk agar disimpan sebagai bukti pembayaran yang sah dari Bank Mandiri'},
        {text: 'Transaksi Anda sudah selesai'},
        {text: 'Setelah transaksi pembayaran Anda selesai, invoice ini akan diperbarui secara otomatis. Ini bisa memakan waktu hingga 5 menit.'},
    ]

    render(){
        const {logo} = this.state
        
        return(
            <View style={styles.container}>
                <Header title={'Confirm Payment'} navigation={this.props.navigation}/>
{}
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.content}>
                        <Image source={logo} style={styles.logoBank} />
                        <View style={styles.instruction}>
                            <View style={styles.instructionHeader}>
                                <Text style={styles.instructionText}>Total Payment</Text>
                            </View>
                            <View style={[styles.instructionBody, {flexDirection:'row', marginRight:5}]}>
                                <Text>Rp</Text>
                                <Text style={{fontSize: 30}}>
                                    {this.props.navigation.getParam('Amount')}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.instruction}>
                            <View style={styles.instructionHeader}>
                                <Text style={styles.instructionText}>Instruction {this.state.AccounNum}</Text>
                            </View>
                            <View style={styles.instructionBody}>
                                {
                                    this.Item.map((res, index) => {
                                        return(
                                            <View style={styles.wrap} key={index}>
                                                <Icon type="Octicons" name="primitive-dot" style={styles.listIcon}/>
                                                <Text style={styles.itemText}>{res.text}</Text>
                                            </View>
                                        )
                                    })
                                }
                            </View>
                        </View>
                    </View>
                </ScrollView>
                
                <TouchableOpacity activeOpacity={0.8} style={styles.footerTouch} onPress={() => {this.props.navigation.navigate("DetailBooking")}}>
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>Langsung Ke pembayaran</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default ConfirmPayment

const styles = StyleSheet.create({
    footerText:{
        color: '#FFF',
        fontSize: 18,
        alignSelf: 'center',
        marginTop: 10,
    },
    footeTouch:{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 50,
    },
    footer:{
        height: 50,
        backgroundColor: '#1C8CD1',
    },
    listIcon:{
        color: '#1C8CD1',
        fontSize: 20,
    },
    itemText:{
        marginTop: 0,
        fontSize: 15,
        marginHorizontal: 10,
        justifyContent: 'center'
    },
    wrap:{
        marginBottom: 10,
        flexDirection: 'row'
    },
    container: {
        position: 'relative',
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
    logoBank:{
        width: 150,
        height: 100,
        alignSelf: 'center',
        resizeMode: 'stretch'
    },
    instruction:{
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#E7E7E7',
        marginHorizontal: 5,
        borderRadius: 5,
    },
    instructionHeader:{
        height: 30,
        backgroundColor: '#F5F5F5'
    },
    instructionText:{
        fontSize: 17,
        marginTop: 2,
        marginLeft: 10,
        justifyContent: "center",
        fontWeight: 'bold'
    },
    instructionBody:{
        margin: 10,
    }
})