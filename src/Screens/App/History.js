import React from 'react'
import {FlatList, RefreshControl, ScrollView} from 'react-native'
import { Container, Header, Content, List, ListItem, Text, Left, Right, Badge, Row} from 'native-base';

import axios from 'axios'
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
        await axios.get('https://salty-plains-50836.herokuapp.com/booking/history')
    }

    getHistory=()=>{
        this.setState({load:true})
        axios.get('https://salty-plains-50836.herokuapp.com/booking/history')
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
       const loading = this.state.load
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
                        <ListItem>
                            <Row>
                                <Left><Text>Pembayaran Kost {item.item.labelName}</Text></Left>
                                    <Right>
                                    {
                                        item.item.status=='PAID' || item.item.status=='SETTLED' ? <Badge success><Text>PAID</Text></Badge>
                                        :item.item.status=='Pending' ? <Badge warning><Text>PENDING</Text></Badge>
                                        :<Badge danger ><Text>FAILED</Text></Badge>  
                                    }
                                </Right>
                            </Row>
                           
                        
                        </ListItem>
                    )}  
                    />

                    </List>
                    </Content>
                </Container>
            
            </ScrollView>
        )
    }
}
