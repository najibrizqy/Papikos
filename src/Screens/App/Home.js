import React, {Fragment} from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  StatusBar,
  ScrollView,
  Text,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {connect} from 'react-redux';
import {getRegions} from '../../Redux/Action/regions';
import {getRooms} from '../../Redux/Action/room';
import {Icon, Thumbnail} from 'native-base';

import header from '../../Assets/header.png';
import papikos from '../../Assets/papikos.png';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      regions: [],
      rooms: [],
    };
  }

  dummyCity = [
    {
      name: 'Jakarta',
      image:
        'https://indonesiaexpat.biz/wp-content/uploads/2018/08/20208_Jakarta-Indonesia-ThinkstockPhotos-hanafichi.jpg',
    },
    {
      name: 'Yogyakarta',
      image:
        'https://www.indonesia.travel/content/dam/indtravelrevamp/en/destinations/java/di-yogyakarta/image11.jpg',
    },
    {
      name: 'Bandung',
      image:
        'https://static.pikiran-rakyat.com/public/medium/public/image/2018/09/alun-alun%20bandung%202018%20a.jpg',
    },
    {
      name: 'Malang',
      image:
        'https://upload.wikimedia.org/wikipedia/id/thumb/7/75/Tugu_Balai_Kota_Malang.jpg/400px-Tugu_Balai_Kota_Malang.jpg',
    },
    {
      name: 'Surabaya',
      image:
        'https://cdn-u1-gnfi.imgix.net/post/large-surabaya-6b40c47198235b9b7d075492a0745ca8.jpg',
    },
    {
      name: 'Bali',
      image:
        'https://img.jakpost.net/c/2019/03/19/2019_03_19_67991_1552969698._large.jpg',
    },
    {
      name: 'Lombok',
      image:
        'https://www.telegraph.co.uk/content/dam/Travel/2018/July/lombok-GettyImages-498839091.jpg?imwidth=450',
    },
  ];

  dummyKos = [
    {
      image:
        'http://www.mikripolikos.com/wp-content/gallery/family-room/kos-resort-family-room-01.jpg',
      name: 'Kos Magelangan',
      area: '20x20 m',
      price: '500000',
      gender: 'mix',
    },
    {
      image:
        'http://www.mikripolikos.com/wp-content/gallery/family-room/kos-resort-family-room-01.jpg',
      name: 'Kos Magelangan',
      area: '20x20 m',
      price: '500000',
      gender: 'male',
    },
    {
      image:
        'http://www.mikripolikos.com/wp-content/gallery/family-room/kos-resort-family-room-01.jpg',
      name: 'Kos Magelangan',
      area: '20x20 m',
      price: '500000',
      gender: 'female',
    },
    {
      image:
        'http://www.mikripolikos.com/wp-content/gallery/family-room/kos-resort-family-room-01.jpg',
      name: 'Kos Magelangan',
      area: '20x20 m',
      price: '500000',
      gender: 'mix',
    },
    {
      image:
        'http://www.mikripolikos.com/wp-content/gallery/family-room/kos-resort-family-room-01.jpg',
      name: 'Kos Magelangan',
      area: '20x20 m',
      price: '500000',
      gender: 'male',
    },
  ];

  componentDidMount = async () => {
    await this.props.dispatch(getRegions()).then(res => {
      if (res.action.payload.data.status === 400) {
        this.setState({regions: []});
        ToastAndroid.show(
          `${res.action.payload.data.message}`,
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
      } else {
        this.setState({regions: this.props.regions.Regions.data});
        console.log(this.state.regions);
      }
    });

    await this.props.dispatch(getRooms()).then(res => {
      if (res.action.payload.data.status === 400) {
        this.setState({rooms: []});
        ToastAndroid.show(
          `${res.action.payload.data.message}`,
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
      } else {
        this.setState({rooms: this.props.rooms.Rooms.data});
        console.log(this.state.rooms);
      }
    });
  };

  render() {
    const {regions, rooms} = this.state;
    return (
      <View style={styles.content}>
        <StatusBar translucent backgroundColor="#1AB0D3" />
        <View style={styles.header}>
          <Image source={papikos} style={styles.headerLogo} />
          <ImageBackground source={header} style={styles.headerImage} />
          <View style={styles.search}>
            <TextInput placeholder="Find Location" style={styles.searchInput} />
            <Icon type="FontAwesome" name="search" style={styles.iconSearch} />
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.cityWrapper}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {regions.map((res, index) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    key={index}
                    style={styles.touchCity}
                    onPress={() => {
                      this.props.navigation.navigate('ProductMap');
                    }}>
                    <View style={styles.item}>
                      <Thumbnail
                        square
                        source={{uri: `${res.image}`}}
                        style={styles.thumbnail}
                      />
                      <Text style={styles.placeText}>{res.name}</Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
          <View style={styles.body}>
            <View style={styles.populerWrapper}>
              <Text style={styles.title}>Recommendation Kos</Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {this.dummyKos.map((res, index) => {
                  return (
                    <View style={styles.carousel} key={index}>
                      <View style={styles.headerCard}>
                        <Image
                          source={{uri: `${res.image}`}}
                          style={styles.imgCard}
                        />
                        <View style={styles.genderWrapper}>
                          <Text style={styles.genderText}>{res.gender}</Text>
                        </View>
                      </View>
                      <View style={styles.bodyCard}>
                        <Text style={styles.name}>{res.name}</Text>
                        <Text style={styles.area}>{res.area}</Text>
                        <Text style={styles.price}>Rp {res.price}/month</Text>
                      </View>
                    </View>
                  );
                })}
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: '#F5F5F5',
  },
  header: {
    position: 'relative',
    height: 150,
  },
  headerImage: {
    flex: 1,
    resizeMode: 'stretch',
  },
  headerLogo: {
    position: 'absolute',
    resizeMode: 'stretch',
    width: 200,
    height: 50,
    top: 10,
    left: 15,
    zIndex: 2,
  },
  search: {
    position: 'absolute',
    alignSelf: 'center',
    width: '92%',
    bottom: 20,
  },
  searchInput: {
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    paddingVertical: 5,
    paddingHorizontal: 15,
    paddingLeft: 40,
    backgroundColor: '#FFF',
  },
  iconSearch: {
    position: 'absolute',
    top: 16,
    left: 14,
    fontSize: 17,
    color: 'gray',
  },
  touchCity: {
    justifyContent: 'center',
  },
  cityWrapper: {
    backgroundColor: '#FFF',
    height: 110,
    flexDirection: 'row',
  },
  item: {
    flexDirection: 'column',
    width: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  placeText: {
    color: '#4D4D4D',
    marginTop: 5,
  },
  body: {
    height: '100%',
  },
  populerWrapper: {
    margin: 15,
    height: 240,
  },
  title: {
    fontSize: 17,
  },
  carousel: {
    marginRight: 15,
    width: 150,
    height: 180,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#FFF',
    elevation: 2,
  },
  headerCard: {
    position: 'relative',
    width: '100%',
    height: 85,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    zIndex: 1,
  },
  imgCard: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    zIndex: 2,
  },
  genderWrapper: {
    position: 'absolute',
    bottom: -11,
    left: 10,
    backgroundColor: '#1AB0D3',
    zIndex: 2,
    borderRadius: 3,
  },
  genderText: {
    color: '#FFF',
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  bodyCard: {
    padding: 10,
  },
  name: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  area: {
    marginTop: 5,
    fontSize: 12,
  },
  price: {
    marginTop: 5,
    fontSize: 13,
    fontWeight: 'bold',
  },
});

const mapStateToProps = state => {
  return {
    regions: state.regions,
  };
};

export default connect(mapStateToProps)(Home);
