import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  Text,
} from 'react-native';
import {Icon, Button} from 'native-base';
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
          marginHorizontal: 2,
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

  handleBooking = () => {
    this.props.navigation.navigate("Payment")
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.back}>
            <Icon
              type="AntDesign"
              name="arrowleft"
              style={styles.backIcon}
              onPress={() => this.props.navigation.goBack()}
            />
          </View>
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
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.kosName}>Kos Grogol Petamburan Gelong</Text>
            <Text style={styles.type}>Premium</Text>
            <Icon type="MaterialCommunityIcons" name="directions" style={styles.mapIcon}/>
            <View style={styles.info}>
              <Text style={styles.itemInfo}>Area</Text>
              <Text style={styles.valueInfo}>3 x 3 m</Text>
              <Text style={styles.itemInfo}>Facilities</Text>
              <Text style={styles.valueInfo}>kamar babi</Text>
              <Text style={styles.itemInfo}>Description</Text>
              <Text style={styles.valueInfo}>
                BOOKING kamar sekarang dan GRATIS LAUNDRY 15 kg setiap bulan |
                Bisa PASUTrI | Sudah Tersedia Sprei di setiap kamar | Kos yang
                sangat strategis dekat dengan Universitas Timbut Nusantara dan
                STIE IBEK serta dekat dengan pusat perbelanjaan seperti Central
                Park cok.
              </Text>
              <Text style={styles.itemInfo}>Owner</Text>
              <Text style={styles.valueInfo}>
                icon..  bla
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.content}>
            <View style={styles.priceWrap}>
              <Text style={styles.priceText}>Rp 500.000 / month</Text>
            </View>
            <View style={styles.btn}>
              <Button bordered style={styles.btnChat}>
                <Icon
                  type="MaterialIcons"
                  name="chat"
                  style={styles.iconChat}
                />
              </Button>
              <Button style={styles.btnBooking} onPress={this.handleBooking}>
                <Text style={styles.btnText}> Booking </Text>
              </Button>
            </View>
          </View>
        </View>
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
  body: {
    backgroundColor: '#FFF',
    height: '58 %',
  },
  type: {
    color: 'orange',
  },
  info: {
    marginTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#CDCDCD',
  },
  itemInfo: {
    marginTop: 15,
    fontSize: 15,
    fontWeight: 'bold',
  },
  bodyContent: {
    position: 'relative',
    margin: 15,
    height: '90%',
    flexDirection: 'column',
  },
  mapIcon:{
    position: "absolute",
    right: 0,
    top: 10,
    color: '#1C8CD1',
    fontSize: 30
  },
  footer: {
    position: 'absolute',
    height: 70,
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
  back: {
    position: 'absolute',
    top: 10,
    left: 15,
    zIndex: 2,
  },
  backIcon: {
    fontSize: 25,
    color: '#FFF',
    elevation: 5,
  },
  content: {
    position: 'relative',
    width: '90%',
    height: '80%',
    alignSelf: 'center',
    marginTop: 5,
  },
  btn: {
    position: 'absolute',
    right: 0,
    flexDirection: 'row',
    marginTop: 7,
  },
  btnBooking: {
    backgroundColor: '#1C8CD1',
    marginLeft: 10,
    borderRadius: 5,
  },
  btnChat: {
    borderColor: '#1C8CD1',
    borderRadius: 5,
  },
  btnText: {
    color: '#FFF',
    paddingHorizontal: 10,
  },
  iconChat: {
    margin: 0,
    padding: 0,
    color: '#1C8CD1',
  },
  priceWrap: {
    position: 'absolute',
    top: 18,
    width: 170,
  },
  priceText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  kosName: {
    fontSize: 17,
  },
});
