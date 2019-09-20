import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

class KosDetail extends Component {
  constructor() {
    super();
    this.state = {
      data: '',
      activeSlide: 0,
    };
  }

  dummyImage = [
    {
      image:
        'https://s-ec.bstatic.com/images/hotel/max1024x768/164/164741337.jpg',
    },
    {
      image:
        'https://rumahdijual.com/attachments/jakarta-barat/22177037d1522898894-20-kamar-kamar-mandi-dalam-kost-putri-tanjung-duren-whatsapp-image-2018-04-04-11.52.47.jpg',
    },
    {
      image:
        'https://s-ec.bstatic.com/images/hotel/max1024x768/164/164741337.jpg',
    },
  ];

  _renderItem({item, index}) {
    return (
      <View style={styles.slider} key={index}>
        <Image source={{uri: `${item.image}`}} style={styles.image} />
      </View>
    );
  }

  get pagination() {
    const {activeSlide} = this.state;
    return (
      <Pagination
        dotsLength={this.dummyImage.length}
        activeDotIndex={activeSlide}
        containerStyle={{
          backgroundColor: 'transparent',
          position: 'absolute',
          bottom: 0,
          alignSelf: 'center',
          paddingVertical: 10,
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: '#1AB0D3',
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Carousel
            data={this.dummyImage}
            renderItem={this._renderItem}
            windowSize={1}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            onSnapToItem={index => this.setState({activeSlide: index})}
          />
          {this.pagination}
        </View>
        <View style={styles.body}></View>
        <View style={styles.footer}></View>
      </View>
    );
  }
}

export default KosDetail;

const sliderWidth = Dimensions.get('window').width;
const itemWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: Dimensions.get('screen').width,
    height: '100%',
    backgroundColor: '#F5F5F5',
  },
  footer: {
    position: 'absolute',
    height: 80,
    backgroundColor: '#FFF',
    bottom: 0,
    width: '100%',
    elevation: 3,
  },
  header: {
    position: 'relative',
    height: 200,
  },
  slider: {
    width: Dimensions.get('screen').width,
    height: '100%',
  },
  image: {
    width: Dimensions.get('screen').width,
    height: '100%',
  },
});
