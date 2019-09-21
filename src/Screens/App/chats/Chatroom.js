import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {Icon} from 'native-base';
import firebase from 'firebase';
import {GiftedChat} from 'react-native-gifted-chat';
import {AsyncStorage} from 'react-native';
const {width, height} = Dimensions.get('window');
export default class Chatroom extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerRight: (
        <Icon
          type="MaterialCommunityIcons"
          name="dots-vertical"
          style={{color: 'white'}}
        />
      ),
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerStyle: {
        backgroundColor: '#2980b9',
      },
      title: navigation.getParam('labelName', null),
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      person: {
        uid: props.navigation.getParam('id_partner'),
        email: props.navigation.getParam('labelName'),
        avatar: props.navigation.getParam('image'),
      },
      txtMsg: '',
      messages: [],
    };
  }
  async componentWillMount() {
    const id = await AsyncStorage.getItem('user_id');
    console.log(id);
    this.setState({
      myuid: id,
      myname: await AsyncStorage.getItem('name'),
      avatar: await AsyncStorage.getItem('avatar'),
    });
    console.log(this.state);
  }
  async componentDidMount() {
    const id = await AsyncStorage.getItem('user_id');
    console.warn('Id', id);
    await firebase
      .database()
      .ref('messages')
      .child(id)
      .child(this.state.person.uid)
      .on('child_added', val => {
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, val.val()),
        }));
      });
  }
  sendNotification = data => {
    let headers = {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: 'Basic MzkyODgyMTctMGJjYi00ZTM4LTg5YWYtNjc2MmQ0NjUwMTg2',
    };

    let endpoint = 'https://onesignal.com/api/v1/notifications';
    let params = {
      method: 'POST',
      headers: headers,
      port: 443,
      body: JSON.stringify({
        app_id: 'ea995593-04bb-49e5-8e1c-6f34f33cb271',
        include_player_ids: [`${this.props.navigation.getParam('device_id')}`],
        contents: {en: data},
      }),
    };
    fetch(endpoint, params).then(res => console.log(res));
  };
  sendMessage = async () => {
    if (this.state.txtMsg.length > 0) {
      let msgId = firebase
        .database()
        .ref('messages')
        .child(this.state.myuid)
        .child(this.state.person.uid)
        .push().key;
      let updates = {};
      let message = {
        _id: msgId,
        text: this.state.txtMsg,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        user: {
          _id: this.state.myuid,
          name: this.state.myname,
          avatar: this.state.avatar,
        },
      };
      this.sendNotification('You Have New Notification');

      updates[
        'messages/' +
          this.state.myuid +
          '/' +
          this.state.person.uid +
          '/' +
          msgId
      ] = message;
      updates[
        'messages/' +
          this.state.person.uid +
          '/' +
          this.state.myuid +
          '/' +
          msgId
      ] = message;
      firebase
        .database()
        .ref()
        .update(updates);
      this.setState({txtMsg: ''});
    }
  };

  render() {
    console.log(this.state.messages);
    console.log(this.props.navigation.getParam('device_id'));
    return (
      <GiftedChat
        text={this.state.txtMsg}
        onInputTextChanged={val => {
          this.setState({txtMsg: val});
        }}
        messages={this.state.messages}
        onSend={() => this.sendMessage()}
        user={{_id: this.state.myuid}}
      />
    );
  }
}

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width,
    height,
  },
  header: {
    height: 65,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f39c12',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  right: {
    flexDirection: 'row',
  },
  chatTitle: {
    color: '#fff',
    fontWeight: '600',
    margin: 10,
    fontSize: 15,
  },
  chatImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    margin: 5,
  },
  input: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    padding: 10,
    height: 40,
    width: width - 20,
    backgroundColor: '#fff',
    margin: 10,
    shadowColor: '#3d3d3d',
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 1,
    },
    borderColor: '#696969',
    borderWidth: 1,
  },
  eachMsg: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    margin: 5,
  },
  rightMsg: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    margin: 5,
    alignSelf: 'flex-end',
  },
  userPic: {
    height: 40,
    width: 40,
    margin: 5,
    borderRadius: 20,
    backgroundColor: '#f8f8f8',
  },
  msgBlock: {
    width: 220,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    padding: 10,
    shadowColor: '#3d3d3d',
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 1,
    },
  },
  rightBlock: {
    width: 220,
    borderRadius: 10,
    backgroundColor: '#f39c12',
    padding: 10,
    shadowColor: '#3d3d3d',
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 1,
    },
  },
  msgTxt: {
    fontSize: 15,
    color: '#555',
    fontWeight: '600',
  },
  rightTxt: {
    fontSize: 15,
    color: '#ffffff',
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#eeeeee',
    paddingHorizontal: 10,
    padding: 5,
  },
  btnSend: {
    backgroundColor: '#f1c40f',
    width: 40,
    height: 40,
    borderRadius: 360,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
  },
  iconSend: {
    width: 30,
    height: 30,
    alignSelf: 'center',
  },
  inputs: {
    height: 40,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
});
