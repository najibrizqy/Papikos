import React from 'react'
import {ScrollView} from 'react-native'
import { Container, Header, Content, List, ListItem, Text, Left, Right, Icon } from 'native-base';

export default class History extends React.Component{
    render(){
        return (
            <>
                <Container>
                    <Header />
                    <Content>
                    <List>
                        <ListItem>
                            <Left>
                                <Text>Kost atmajaya</Text>
                            </Left>
                            <Right>
                                <Badge success><Text>Failed</Text></Badge>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text>Kost Cendrawsih</Text>
                            </Left>
                            <Right>
                                <Badge warning><Text>Pending</Text></Badge>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text>Kost Cindai</Text>
                            </Left>
                            <Right>
                                <Badge danger><Text>Expired</Text></Badge>
                            </Right>
                        </ListItem>
                    </List>
                    </Content>
                </Container>
            
            </>
        )
    }
}