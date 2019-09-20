import React, {Component} from 'react';
import {
  Text,
  Button,
  Dimensions,
  StyleSheet,
  Platform,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {Container, Icon, Tab, Tabs} from 'native-base';
import ProductList from './UserHome/ProductList';

class ListRoom extends Component {
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
        <ProductList navigation={this.props.navigation} />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    partner: state.partner,
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
