import React, {Component} from 'react';
import {
  Text,
  Button,
  Dimensions,
  StyleSheet,
  Platform,
  View,
  ToastAndroid,
} from 'react-native';
import {connect} from 'react-redux';
import {getRooms} from '../../Redux/Action/room';
import {Container, Icon, Tab, Tabs} from 'native-base';
import ProductList from './UserHome/ProductList';

class ListRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partner: props.navigation.getParam('item'),
      rooms: props.rooms.Rooms.filter(
        room => room.id_partner === props.navigation.getParam('item').id,
      ),
    };
  }

  componentDidMount = async () => {
    await this.props.dispatch(getRooms()).then(res => {
      if (res.action.payload.data.status === 400) {
        this.setState({rooms: []});
        ToastAndroid.show(
          `${res.action.payload.data.message}`,
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
      } else {
        this.setState({
          rooms: this.props.rooms.Rooms.data.filter(
            room => room.id_partner === this.state.partner.id,
          ),
        });
        console.log(this.state.rooms);
      }
    });
  };
  render() {
    return (
      <Container>
        <View style={styles.header}>
          <View style={styles.searchBar}>
            <View style={styles.wrapText}>
              <Icon
                type="AntDesign"
                name="arrowleft"
                style={styles.backIcon}
                onPress={() => this.props.navigation.goBack()}
              />
              <Text style={styles.textBar}>
                {this.props.navigation.getParam('item').labelName}
              </Text>
            </View>
          </View>
        </View>
        <ProductList
          navigation={this.props.navigation}
          rooms={this.state.rooms}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    partner: state.partner,
    rooms: state.rooms,
  };
};

export default connect(mapStateToProps)(ListRoom);

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFF',
    height: 60,
  },
  searchBar: {
    marginTop: 10,
    alignSelf: 'center',
    width: '90%',
    height: 50,
    backgroundColor: '#E7E7E7',
    borderRadius: 5,
  },
  wrapText: {
    flexDirection: 'row',
    marginTop: 15,
    paddingHorizontal: 15,
  },
  backIcon: {
    color: '#1AB0D3',
    fontSize: 20,
    marginRight: 15,
  },
  tabsUnderline: {
    borderColor: '#1AB0D3',
    borderBottomWidth: 2,
  },
  activeTab: {
    color: '#1AB0D3',
    backgroundColor: '#FFF',
  },
  text: {
    color: 'gray',
  },
  activeText: {
    color: '#1AB0D3',
    fontWeight: 'normal',
  },
  color: {
    backgroundColor: '#FFF',
  },
});
