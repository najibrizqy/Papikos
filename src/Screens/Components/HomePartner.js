import React, {Component} from 'react';
import {View,Image,Text,StyleSheet,Dimensions,SafeAreaView,ScrollView,TouchableOpacity,AsyncStorage} from 'react-native';
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
          rooms: ['Reguler','VIP','VVIP','Premium'],
          id_partner: ''
        }
      }
componentDidMount = async () => {
        await this.props.dispatch (getRooms())
        const id_partner= await AsyncStorage.getItem('partner_id');
        this.setState({id_partner});
};
render(){
  let a=0
  this.props.rooms.Rooms?
  this.props.rooms.Rooms.map((item,index)=>{
    if(item.id_partner==this.state.id_partner){
      a=a+1
    }
  }):console.log('')
    const colors = [
        '#1AB0D3',
        '#ff8c00',
        '#9A2B6B',
        '#5B8B89']
    return(
        <Container>
            <SafeAreaView style={{ flex: 1,backgroundColor: '#F5F5F5'}}>
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
                  {a>0? this.props.rooms.Rooms.map((item,index)=>{
                    if(item.id_partner==this.state.id_partner){
                      return(
                        <TouchableOpacity activeOpacity={0.9} onPress={()=>this.props.navigation.navigate('Details',{data:item})} key={index} >
                                            <Card style={{width: 315}} >
                                      <CardItem>
                                        <Left>
                                          <Body>
                                            <Text style={{fontSize: 18,fontWeight:'bold'}}>{item.name}</Text>
                                            <Text note>Rp {item.price}/month</Text>
                                          </Body>
                                        </Left>
                                        <Right>
                                            <View style={{...styles.bullet,backgroundColor:'#1AB0D3'}}>
                                                <Text style={{color: 'white',fontSize: 25,fontWeight:'bold'}}>{item.id}</Text>
                                            </View>
                                        </Right>
                                      </CardItem>
                                      <CardItem cardBody>
                                        <Image source={{uri:`${item.image}`}} style={{height: 200, width: null, flex: 1}}/>
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
                                          {item.status? <Text>AVAILABLE</Text>:<Text>UNAVAILABLE</Text>}
                                        </Right>
                                      </CardItem>
                                    </Card>
                                    </TouchableOpacity>
                          )
                    }
                  })
                   :<View style={styles.allrooms}>
                     <TouchableOpacity activeOpacity={0.8} onPress={()=>this.props.navigation.navigate('Addroom')}><Text style={styles.text}>Click here to add room</Text></TouchableOpacity>
                   </View>
          }
                      
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
  allrooms:{
    backgroundColor: '#F5F5F5',
    alignItems:'center',
    paddingTop: 80
  },
  text:{
    fontSize: 15,
  },
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
