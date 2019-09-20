import React, {Component} from 'react';
import {
  Container,
  Header,
  Tab,
  Button,
  Tabs,
  TabHeading,
  Icon,
  Text,
  Left,
  Badge,
  ActionSheet,
  Right,
} from 'native-base';
import {Image, StyleSheet, StatusBar} from 'react-native';
import logo from '../../../assets/papikos-01.png';
import Home from '../Components/HomePartner';
var BUTTONS = [
  {text: 'Add Room', icon: 'add-circle', iconColor: '#2c8ef4'},
  {text: 'History', icon: 'bookmarks', iconColor: '#f42ced'},
  {text: 'Income', icon: 'pulse', iconColor: '#ea943b'},
  {text: 'Cancel', icon: 'close', iconColor: '#25de5b'},
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;
export default class Homescreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Header hasTabs style={{backgroundColor: '#1AB0D3'}}>
          <StatusBar translucent backgroundColor="#0F73CE" />
          <Left>
            <Image style={styles.logo} source={logo}></Image>
          </Left>
          <Right>
            <Button
              transparent
              onPress={() =>
                ActionSheet.show(
                  {
                    options: BUTTONS,
                    cancelButtonIndex: CANCEL_INDEX,
                    destructiveButtonIndex: DESTRUCTIVE_INDEX,
                  },
                  buttonIndex => {
                    switch (buttonIndex) {
                      case 0:
                        this.props.navigation.navigate('Addroom');
                        break;
                      case 1:
                        this.props.navigation.navigate('History');
                        break;
                      case 2:
                        this.props.navigation.navigate('Income');
                        break;
                      default:
                        break;
                    }
                  },
                )
              }>
              <Icon name="more" />
            </Button>
          </Right>
        </Header>
        <Tabs style={{overflow: 'hidden'}}>
          <Tab
            heading={
              <TabHeading style={{backgroundColor: '#1AB0D3'}}>
                <Icon name="home" />
                <Text>Home</Text>
              </TabHeading>
            }>
            <Home navigation={this.props.navigation} />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{backgroundColor: '#1AB0D3'}}>
                <Icon name="chatboxes" />
                <Text>Chats</Text>
                <Badge>
                  <Text>2</Text>
                </Badge>
              </TabHeading>
            }>
            <Text>Test lagi</Text>
          </Tab>
          <Tab
            heading={
              <TabHeading style={{backgroundColor: '#1AB0D3'}}>
                <Icon name="person" />
                <Text>Profile</Text>
              </TabHeading>
            }>
            <Text>Test banget</Text>
          </Tab>
        </Tabs>
      </Container>
    );
    s;
  }
}
const styles = StyleSheet.create({
  logo: {
    resizeMode: 'stretch',
    width: 190,
    height: 50,
  },
});
