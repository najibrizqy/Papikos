import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: props.rooms,
    };
  }
  componentDidMount = async () => {
    console.log(this.state.rooms);
  };

  render() {
    const {rooms} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            {rooms.map((res, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.9}
                  key={index}
                  style={styles.touchCard}
                  onPress={() =>
                    this.props.navigation.navigate('KosDetail', {item: res})
                  }>
                  <View style={styles.card}>
                    <Image
                      source={{uri: `${res.image.split(',')[0]}`}}
                      style={styles.imageCard}
                    />
                    <View style={styles.bodyCard}>
                      <View style={styles.titleInfo}>
                        <Text style={styles.name}>{res.name}</Text>
                        <Icon
                          type="Entypo"
                          name="dot-single"
                          style={styles.dot}
                        />
                        <Text style={styles.city}>{res.city}</Text>
                      </View>
                      <Text style={styles.price}>Rp {res.price} / month</Text>
                      <View style={styles.statusWrapper}>
                        <Text style={styles.statusText}>
                          {res.status === 'false'
                            ? 'Not Available'
                            : 'Available'}
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F5F5F5',
  },
  content: {
    paddingVertical: 20,
  },
  touchCard: {
    marginBottom: 20,
  },
  card: {
    alignSelf: 'center',
    width: '90%',
    height: 310,
    backgroundColor: '#FFF',
    borderRadius: 5,
  },
  imageCard: {
    width: '100%',
    height: 200,
    resizeMode: 'stretch',
    borderRadius: 5,
  },
  bodyCard: {
    padding: 10,
  },
  name: {
    fontSize: 16,
  },
  city: {
    fontSize: 15,
    alignSelf: 'flex-end',
  },
  price: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
  statusWrapper: {
    marginTop: 10,
    width: 120,
    backgroundColor: '#109E4A',
    borderRadius: 20,
  },
  statusText: {
    color: '#FFF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: 'center',
  },
  titleInfo: {
    flexDirection: 'row',
  },
  dot: {
    color: 'gray',
    alignSelf: 'center',
    fontSize: 15,
  },
});
