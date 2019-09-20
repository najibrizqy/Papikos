import React, {Component} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {Dimensions, StyleSheet, View, Text} from 'react-native';
import {withNavigation} from 'react-navigation';
import {ScrollView} from 'react-native-gesture-handler';
import {Footer, Left, Body, Right, Button} from 'native-base';

const {width: screenWidth} = Dimensions.get('window');

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [
        {
          title: 'Kamar',
          thumbnail:
            'https://cdn-image.hipwee.com/wp-content/uploads/2017/07/hipwee-kosan3-750x422.jpg',
        },
        {
          title: 'Toilet',
          thumbnail:
            'https://pix6.agoda.net/hotelImages/4917129/0/28544d88c04c166c2e09fdce6cddb2e0.jpg?s=1024x768',
        },
        {
          title: 'Parkir',
          thumbnail:
            'https://cdn-image.hipwee.com/wp-content/uploads/2014/12/Kost-Keputih-Lt-1-parkir-motor-750x562.jpg',
        },
      ],
    };
  }

  _renderItem({item, index}, parallaxProps) {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{uri: item.thumbnail}}
          title="dscc"
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.fill}>
          <Carousel
            sliderWidth={screenWidth}
            sliderHeight={screenWidth}
            itemWidth={screenWidth - 60}
            data={this.state.entries}
            renderItem={this._renderItem}
            hasParallaxImages={true}
          />
          <View style={styles.description}>
            <Text style={styles.subTitle}>Reguler R1</Text>
            <Text style={styles.caption}>Rp 500.000,00/month</Text>
          </View>
          <View style={styles.description}>
            <Text style={styles.subTitle}>Facilities</Text>
            <View style={styles.row}>
              <View style={styles.bullet}>
                <Text>{'\u2022' + ' '}</Text>
              </View>
              <View style={styles.bulletText}>
                <Text>
                  <Text style={styles.normalText}>AC</Text>
                </Text>
              </View>
              <View style={styles.bullet}>
                <Text>{'\u2022' + ' '}</Text>
              </View>
              <View style={styles.bulletText}>
                <Text>
                  <Text style={styles.normalText}>Size room 3m x 3m</Text>
                </Text>
              </View>
              <View style={styles.bullet}>
                <Text>{'\u2022' + ' '}</Text>
              </View>
              <View style={styles.bulletText}>
                <Text>
                  <Text style={styles.normalText}>Bathroom (In)</Text>
                </Text>
              </View>
              <View style={styles.bullet}>
                <Text>{'\u2022' + ' '}</Text>
              </View>
              <View style={styles.bulletText}>
                <Text>
                  <Text style={styles.normalText}>Wi-Fi</Text>
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.description}>
            <Text style={styles.subTitle}>Status</Text>
            <Text style={styles.caption}>AVAILABLE</Text>
          </View>
          <View style={styles.deletebutton}>
            <Button style={styles.delete}>
              <Text style={{color: 'white', fontSize: 17}}>DELETE</Text>
            </Button>
          </View>
        </ScrollView>

        <Footer style={{backgroundColor: 'white'}}>
          <Left style={{paddingHorizontal: 10}}>
            <Body>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                Rp 500.000/month
              </Text>
              <Text>Reguler R1</Text>
            </Body>
          </Left>
          <Right style={{paddingHorizontal: 10}}>
            <Button
              style={{
                width: 100,
                justifyContent: 'center',
                backgroundColor: '#1AB0D3',
                borderRadius: 5,
              }}
              onPress={() => this.props.navigation.navigate('Editroom')}>
              <Text style={{fontSize: 20, color: 'white'}}>Edit</Text>
            </Button>
          </Right>
        </Footer>
      </View>
    );
  }
}
export default withNavigation(Details);
const HEADER_MAX_HEIGHT = screenWidth;
const HEADER_MIN_HEIGHT = screenWidth * 0.4;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  fill: {
    flex: 1,
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
    marginTop: 10,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  subTitle: {
    fontWeight: '500',
    fontSize: 16,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 12,
  },
  description: {
    backgroundColor: '#FFF',
    marginTop: 20,
    padding: 10,
  },
  column: {
    flexDirection: 'column',
    width: screenWidth,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    flex: 1,
  },
  bullet: {
    width: 10,
  },
  bulletText: {
    flex: 1,
  },
  boldText: {
    fontWeight: 'bold',
  },
  normalText: {},
  deletebutton: {
    alignItems: 'center',
  },
  delete: {
    width: 150,
    height: 35,
    marginTop: 20,
    backgroundColor: 'red',
    borderRadius: 30,
    justifyContent: 'center',
  },
});
