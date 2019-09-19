import React, {Component} from 'react';
import {Text, Image, StyleSheet} from 'react-native';
import {Body, Card, CardItem} from 'native-base';

class Category extends Component {
  render() {
    return (
      <Card style={{...styles.cardGenre, width:this.props.width/2-30,backgroundColor: this.props.color}}>
        <CardItem cardBody>
          <Body style={styles.genreTitle}>
            <Text style={styles.genreTitleText}>{this.props.name}</Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  cardGenre: {
    height: 45,
    // backgroundColor: ,
    borderRadius: 10,
    shadowOpacity: 0.25,
    shadowRadius: 20,
    shadowColor: '#2c2c2c',
    shadowOffset: {height: 0, width: 4},
  },
  genreTitle: {
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    width: '100%',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  genreIcon: {
    backgroundColor: 'transparent',
    width: 100,
    height: 100,
  },
  genreTitleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Airbnb Cereal App',
    lineHeight: 20,
  },
});

export default Category;