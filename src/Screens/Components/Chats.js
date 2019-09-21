import React from 'react'
import {
	View,
	StyleSheet,
	Alert,
	AsyncStorage,
	ActivityIndicator,
    ScrollView,
	Item,
	TouchableOpacity
} from 'react-native'
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';

import { withNavigation } from 'react-navigation'
class Friends extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			person: [],
			user:null
		};
	}

	render() {
		return(
	    <Container>
        <ScrollView>
        <Content>
          <List>
			  <TouchableOpacity>
					<ListItem avatar  onPress={()=>this.props.navigation.navigate('ChatsPartner')}>
					<Left>
					  <Thumbnail source={{uri:"https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/116952051/original/771949273be395becfbbdb14f0282a1b2e980c81/draw-flat-line-avatar-for-you.jpg"}} />
					</Left>
					<Body>
					  <Text>Ahmmad Maliki</Text>
					  <Text note>Click here to chat</Text>
					</Body>
					<Right>
					  <Text note>Online</Text>
					</Right>
				  </ListItem>
			  </TouchableOpacity>
              <TouchableOpacity >
					<ListItem avatar>
					<Left>
					  <Thumbnail source={{uri: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/116952051/original/771949273be395becfbbdb14f0282a1b2e980c81/draw-flat-line-avatar-for-you.jpg"}} />
					</Left>
					<Body>
					  <Text>Dedy Zunaidi</Text>
					  <Text note>Click here to chat</Text>
					</Body>
					<Right>
					  <Text note>Offline</Text>
					</Right>
				  </ListItem>
			  </TouchableOpacity>
              <TouchableOpacity >
					<ListItem avatar>
					<Left>
					  <Thumbnail source={{uri: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/116952051/original/771949273be395becfbbdb14f0282a1b2e980c81/draw-flat-line-avatar-for-you.jpg"}} />
					</Left>
					<Body>
					  <Text>Susi Susanti</Text>
					  <Text note>Click here to chat</Text>
					</Body>
					<Right>
					  <Text note>Offline</Text>
					</Right>
				  </ListItem>
			  </TouchableOpacity>
          </List>
        </Content>
        </ScrollView>
      </Container>
		)
	}
}

const styles = StyleSheet.create({
	parentHeader: {
		flexDirection: 'row',
		height: 80,
		alignItems: 'center',
		paddingHorizontal: 20,
		paddingTop: 20,
		backgroundColor: 'white',
		elevation: 2
	},
	textWrap: {
		flex: 1,
		alignItems: 'flex-start'
	},
	headerText: {
		fontSize: 18,
		fontWeight: 'bold',
		left: 20,

	},
})

export default withNavigation(Friends);