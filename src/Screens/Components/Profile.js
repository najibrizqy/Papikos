import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
class Profile extends Component {
    constructor(props) {
		super(props);
		this.state = {
            data:[]
    	};
    }
    // componentDidMount(){
    //     firebase.auth().onAuthStateChanged((user) => {
    //         if(user){
    //             firebase.database().ref('users').on('child_added', (result) => {
    //                 if(result.key==user.uid){
    //                     let data=result.val()
    //                     data.uid=result.key
    //                     this.setState({data: data})
    //                 }
    //             })
    //         }
    //     })
    // }
    // handleLogout(){
    //     firebase.database().ref('users/' + this.state.data.uid ).update({
    //     	region: {
    //             latitude: this.state.data.region.latitude,
	// 			longitude: this.state.data.region.longitude,
	// 			status: 'offline'
    //     	}
    //     })
    //     firebase.auth().signOut().then(function() {
    //         console.log('Signed Out');
    //       }, function(error) {
    //         console.error('Sign Out Error', error);
    //       })
    // }     
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('Editprofile')}>
              <Text style={styles.editbutton}>Edit</Text>
              </TouchableOpacity>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={{uri: `http://www.nusahati.com/wp-content/uploads/2018/02/Kamar-Kos-e1518238751597-300x199.png`}}/>
                <Text style={styles.name}>Kos Magelangan</Text>
                <Text style={styles.userInfo}>kosmagelangan@gmail.com</Text>
            </View>
          </View>

          <View style={styles.body}>
          <View style={styles.description}>
            <Text style={styles.subTitle}>Name</Text>
              <Text style={styles.caption}>Bejo Raharjo</Text>
          </View>
          <View style={styles.description}>
            <Text style={styles.subTitle}>Phone</Text>
              <Text style={styles.caption}>085854939433</Text>
          </View>
          <View style={styles.description}>
            <Text style={styles.subTitle}>Address</Text>
              <Text style={styles.caption}>Jl.Ahmad Yani No.4</Text>
          </View>
          </View>
      </View>
    );
  }
}
export default Profile

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