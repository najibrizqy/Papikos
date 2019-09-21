import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import {connect} from 'react-redux';
import {getAPartner} from '../../Redux/Action/partner'

class Profile extends Component {
    constructor(props) {
		super(props);
		this.state = {
          data:'',
            id_partner:''
    	};
    }
    componentDidMount=async ()=>{
      const id_partner= parseInt(await AsyncStorage.getItem('partner_id'));
      await this.props.dispatch (getAPartner(id_partner))
      this.setState({data:this.props.partner.Partner[0]})
    }
  render() {
    let data=this.state.data
    return (
      <View style={styles.container}>
          <View style={styles.header}>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('Editprofile')}>
              <Text style={styles.editbutton}>Edit</Text>
              </TouchableOpacity>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={{uri: `${data.images}`}}/>
                <Text style={styles.name}>{data.labelName}</Text>
                <Text style={styles.userInfo}>{data.email}</Text>
            </View>
          </View>

          <View style={styles.body}>
          <View style={styles.description}>
            <Text style={styles.subTitle}>Name</Text>
              <Text style={styles.caption}>{data.fullname}</Text>
          </View>
          <View style={styles.description}>
            <Text style={styles.subTitle}>Phone</Text>
              <Text style={styles.caption}>{data.phone}</Text>
          </View>
          <View style={styles.description}>
            <Text style={styles.subTitle}>Address</Text>
              <Text style={styles.caption}>{data.address}</Text>
          </View>
          </View>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    partner:state.partner
  };
};
export default connect(mapStateToProps)(Profile)


const styles = StyleSheet.create({
  header:{
    backgroundColor: "#DCDCDC",
  },
  headerContent:{
    marginBottom:20,
    alignItems: 'center',
  },
  editbutton:{
    marginTop: 10,
    alignSelf: 'flex-end',
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 20,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#000000",
    fontWeight:'600',
  },
  userInfo:{
    fontSize:16,
    color:"#778899",
    fontWeight:'600',
  },
  body:{
    backgroundColor: "#F5F5F5",
    height:500,
  },
  item:{
    flexDirection : 'row',
  },
  infoContent:{
    flex:1,
    alignItems:'flex-start',
    paddingLeft:5
  },
  iconContent:{
    flex:1,
    alignItems:'flex-end',
    paddingRight:5,
  },
  icon:{
    width:30,
    height:30,
    marginTop:20,
  },
  info:{
    fontSize:18,
    marginTop:20,
    color: "#FFFFFF",
  },
  description:{
    backgroundColor: '#FFF',
    marginTop: 20,
    padding: 10
  
},
subTitle: {
    fontWeight: '500',
    fontSize: 16,
    fontWeight: 'bold'
  },
  caption: {
    fontSize: 12,
  },

});