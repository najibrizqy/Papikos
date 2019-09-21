import React from 'react';
import {
  Dimensions,
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  AsyncStorage,
  ActivityIndicator,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import firebase from 'firebase';
import {connect} from 'react-redux';
import chat from '../../Assets/chat.gif';
import {getUsers} from '../../Redux/Action/user';
import {withNavigation} from 'react-navigation';

class Chatpartner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chat: [],
      partner: [],
      data: [],
      uid: null,
      isLoading: false,
    };
  }
  componentDidMount = async () => {
    this.setState({isLoading: true});
    const uid = await AsyncStorage.getItem('user_id');
    this.setState({uid});
    firebase
      .database()
      .ref('messages/' + this.state.uid)
      .on('child_added', data => {
        let person = data.val();
        person.id = data.key;
        this.state.chat.push({
          id: person.id,
        });
        this.setState({chat: this.state.chat});
      });
    await this.props.dispatch(getUsers());
    console.log(this.props.partner.Partner.data);
    this.setState({
      isLoading: false,
      partner: this.props.partner.Partner.data,
    });
  };
  renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('ChatroomUser', item)}>
        <View style={styles.row}>
          <Image source={{uri: item.photo}} style={styles.pic} />
          <View>
            <View style={styles.nameContainer}>
              <Text
                style={styles.nameTxt}
                numberOfLines={1}
                ellipsizeMode="tail">
                {item.fullname}
              </Text>
              <Text style={styles.mblTxt}>Today</Text>
            </View>
            <View style={styles.msgContainer}>
              <Text style={styles.msgTxt}>{item.labelName}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    const user = this.state.partner;
    const chat = this.state.chat;
    let data = [];
    chat.forEach((items, key) => {
      data[key] = user.find(item => item.id == items.id);
    });
    return (
      <>
        {this.state.isLoading == true ? (
          <ActivityIndicator size={'large'} />
        ) : (
          <>
            {this.state.chat.length > 0 ? (
              <SafeAreaView>
                <FlatList
                  data={data}
                  renderItem={this.renderItem}
                  keyExtractor={(item, index) => index.toString()}
                />
              </SafeAreaView>
            ) : (
              <View style={styles.container1}>
                <Text style={styles.title}>Inbox</Text>
                <Text style={styles.description}>
                  messages from the partner will appear here
                </Text>
                <Image
                  source={require('../../Assets/chat.gif')}
                  style={styles.gif}
                />
              </View>
            )}
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    partner: state.partner,
  };
};

export default connect(mapStateToProps)(withNavigation(Chatpartner));

const styles = StyleSheet.create({
  container1: {
    margin: 15,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 15,
  },
  gif: {
    marginTop: 20,
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#DCDCDC',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    padding: 10,
  },
  pic: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 280,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: '600',
    color: '#222',
    fontSize: 18,
    width: 170,
  },
  mblTxt: {
    fontWeight: '200',
    color: '#777',
    fontSize: 13,
  },
  msgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  msgTxt: {
    fontWeight: '400',
    color: '#008B8B',
    fontSize: 12,
    marginLeft: 15,
  },
});
