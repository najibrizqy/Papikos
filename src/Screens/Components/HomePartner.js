import React, {Component} from 'react';
import {View,Image,Text,StyleSheet,Dimensions,SafeAreaView,ScrollView,TouchableOpacity} from 'react-native';
import {Container,Button,Icon,Body,Card, CardItem, Thumbnail,Left, Right} from 'native-base';
import Category from './Card'
import {Rating} from 'react-native-ratings'
import {connect} from 'react-redux';
import {getRooms} from '../../Redux/Action/room'
const { width } = Dimensions.get('window')

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
          rooms: ['Reguler','VIP','VVIP','Premium']
        };
      }
componentDidMount = async () => {
        await this.props.dispatch (getRooms())
};
render(){
  console.warn(this.props.rooms.Rooms.length)
    const colors = [
        '#1AB0D3',
        '#ff8c00',
        '#9A2B6B',
        '#5B8B89']
    return(
        <Container>
            <SafeAreaView style={{ flex: 1}}>
            <ScrollView scrollEventThrottle={16}>
                <View style={{ flex: 1, backgroundColor: '#F5F5F5', paddingTop: 10 }}>
                    <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                        Type
                    </Text>
                    <View style={{paddingHorizontal: 20, marginTop: 10,flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                        {this.state.rooms.map((item,index)=>{
                            return(
                              <TouchableOpacity activeOpacity={0.9} key={index} onPress={()=>this.props.navigation.navigate(`${item}`)}>
                                <Category width={width} color={colors[index]} name={item} />
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                    <View style={{ marginTop: 5 ,paddingHorizontal:20}}>
                        <Text style={{ fontSize: 24, fontWeight: '700'}}>
                            All Rooms
                        </Text>
                  
                      <TouchableOpacity activeOpacity={0.9} onPress={()=>this.props.navigation.navigate('Details')} >
                        <Card style={{width: 315}} >
            <CardItem>
              <Left>
                <Body>
                  <Text style={{fontSize: 18,fontWeight:'bold'}}>Kos Magelangan</Text>
                  <Text note>Rp 500.000/month</Text>
                </Body>
              </Left>
              <Right>
                  <View style={{...styles.bullet,backgroundColor:'#1AB0D3'}}>
                      <Text style={{color: 'white',fontSize: 25,fontWeight:'bold'}}>R1</Text>
                  </View>
              </Right>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri:'https://cdn-image.hipwee.com/wp-content/uploads/2017/07/hipwee-kosan3-750x422.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
              <Rating
              type="star"
              startingValue={5}
              ratingCount={5}
              imageSize={13}
            />
              </Left>
              <Right>
                <Text>AVAILABLE</Text>
              </Right>
            </CardItem>
          </Card>
          </TouchableOpacity>
          <Card style={{width: 315}}>
            <CardItem>
              <Left>
                <Body>
                  <Text style={{fontSize: 18,fontWeight:'bold'}}>Kos Magelangan</Text>
                  <Text note>Rp 2.000.000/month</Text>
                </Body>
              </Left>
              <Right>
                  <View style={{...styles.bullet,backgroundColor:'#ff8c00'}}>
                      <Text style={{color: 'white',fontSize: 25,fontWeight:'bold'}}>V1</Text>
                  </View>
              </Right>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri:'https://arsitagx-master-article.s3.ap-southeast-1.amazonaws.com/article-photo/501/kos-pria-1.jpeg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
              <Rating
              type="star"
              startingValue={5}
              ratingCount={5}
              imageSize={13}
            />
              </Left>
              <Right>
                <Text>AVAILABLE</Text>
              </Right>
            </CardItem>
          </Card>
                     </View>
                </View>  
            </ScrollView>
            </SafeAreaView>
        </Container>
    )
}
}
const mapStateToProps = state => {
  return {
    rooms:state.rooms
  };
};
export default connect(mapStateToProps)(Home);
const styles = StyleSheet.create({
    genreContainer: {
        marginTop: -550,
        marginBottom: 20,
        marginHorizontal: 29,
      },
      bullet:{
        width:width/5-10,
        height:width/5-10,
        borderRadius:(width/5-10)/2,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'flex-end',
        elevation:4
      }

})
