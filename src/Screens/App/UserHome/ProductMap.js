import React, {Component, Fragment} from 'react';
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

import MapView from 'react-native-map-clustering';
import {Marker} from 'react-native-maps';

import ProductList from './ProductList';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class ProductMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.navigation.getParam('item'),
      latitude: parseFloat(props.navigation.getParam('item').loc_lattitude),
      longitude: parseFloat(props.navigation.getParam('item').loc_longitude),
      partner: props.partner.Partner.data,
      rooms: props.rooms.Rooms,
    };
  }
  componentDidMount = () => {
    console.log(this.props.navigation.getParam('item'));
    console.log(this.state.partner);
    console.log(this.state.location);
    console.log(this.state.rooms);
  };

  render() {
    const {latitude, longitude, partner} = this.state;
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
                {this.props.navigation.getParam('item').name}
              </Text>
            </View>
          </View>
        </View>
        <Tabs
          style={Platform.OS === 'android' ? {overflow: 'hidden'} : null}
          tabBarUnderlineStyle={styles.tabsUnderline}
          locked={true}>
          <Tab
            heading="Maps View"
            tabStyle={styles.color}
            activeTabStyle={styles.activeTab}
            textStyle={styles.text}
            activeTextStyle={styles.activeText}>
            <MapView
              region={{
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
              }}
              style={{width: '100%', height: '100%'}}>
              {partner.map((item, index) => (
                <Marker
                  key={index}
                  coordinate={{
                    latitude: parseFloat(item.latitude),
                    longitude: parseFloat(item.longitude),
                  }}
                  title={item.labelName}
                  description={item.address}
                  onCalloutPress={() =>
                    this.props.navigation.navigate('ListRoom', {item})
                  }
                  // icon='sesuaikan Icon Disini'
                />
              ))}
            </MapView>
          </Tab>
          <Tab
            heading="List View"
            tabStyle={styles.color}
            activeTabStyle={styles.activeTab}
            textStyle={styles.text}
            activeTextStyle={styles.activeText}>
            <ProductList
              navigation={this.props.navigation}
              rooms={this.state.rooms}
            />
          </Tab>
        </Tabs>
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

export default connect(mapStateToProps)(ProductMap);

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
