import React from 'react'
import {FlatList, RefreshControl, ScrollView, TouchableOpacity, AsyncStorage} from 'react-native'
import { Container, Header, Content, List, ListItem, Text, Left, Right, Badge, Row} from 'native-base';

import axios from 'axios'
import jwt from 'jwt-decode'
export default class History extends React.Component{
    constructor(){
    super()
        this.state={
            Payment : [],
            refresh:false
        }
    }

    _onRefresh  = () => {
        this.setState({refresh: true});
        this. getHistory()
      }


     refreshData=async()=>{
         const token = await AsyncStorage.getItem('tokenUser')
         const tokendecode = jwt(token)
         const id = tokendecode['id']
         console.log("token",id)

        await axios.get(`https://salty-plains-50836.herokuapp.com/booking/history/${id}`)
    }

    getHistory= async()=>{
        const token = await AsyncStorage.getItem('tokenUser')
        const tokendecode = jwt(token)
        const id = tokendecode['id']
        console.log("token",id)


        this.setState({load:true})
 
        await axios.get(`https://salty-plains-50836.herokuapp.com/booking/history/${id}`)
            .then(result=>{
                this.setState({Payment:result.data.result})
                this.setState({refresh: false});
            }).catch(err=>{
                console.warn(err)
            })
    }

    async componentDidMount(){
        await this.getHistory()
    }


    render(){
       const result = this.state.Payment
       console.warn(result)
        return (
            <ScrollView refreshControl={
                <RefreshControl
                  refreshing={this.state.refresh}
                  onRefresh={this._onRefresh}
                />
              }>
                <Container>
                    <Content>
                    <List>

                    <FlatList  
                    data={result}  
                    renderItem={(item) =>(
                        <TouchableOpacity onPress={()=>alert('est')}>
                            <ListItem>
                            <Row>
                                <Left><Text>Pembayaran Kost {item.item.labelName}</Text></Left>
                                    <Right>
                                    {
                                        item.item.status=='PAID' || item.item.status=='SETTLED' ? <Badge success><Text>PAID</Text></Badge>
                                        :item.item.status=='Pending' ? <Badge warning><Text>UNPAID</Text></Badge>
                                        :<Badge danger ><Text>FAILED</Text></Badge>  
                                    }
                                </Right>
                            </Row>
                        </ListItem>
                        </TouchableOpacity>
                    )}  
                    />
                    </List>
                    </Content>
                </Container>
            
            </ScrollView>
        )
    }
}
