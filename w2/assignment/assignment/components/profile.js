import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert, ScrollView,Dimensions} from 'react-native';

const imgData = [
  { id: 1, imgSource: require('./assets/image_1.jpg') },
  { id: 2, imgSource: require('./assets/image_2.jpg') },
  { id: 3, imgSource: require('./assets/image_3.jpg') },
  { id: 4, imgSource: require('./assets/image_4.jpeg') },
  { id: 5, imgSource: require('./assets/image_5.jpg') },
  { id: 6, imgSource: require('./assets/image_6.jpeg') }
];

export default function App() {
  const centerImgData = Math.floor(imgData.length / 2);
  return (
    <View style={styles.container}>
      <View style = {{flexDirection : "row",alignItems:'center', justifyContent : "space-between", marginBottom : 20, marginHorizontal : 0, width : Dimensions.get('window').width }}>
        <Image style = {styles.bottomIcon}  source = {require('./assets/left-arrow.png')}/>
        <Image style = {styles.bottomIcon}  source = {require('./assets/4dots.png')}/>

      </View>
      <View style = {{ flexDirection : 'row' }}>
        <Image source={require('./assets/profile_image.jpg')} style = {styles.avatar}/>
        <View style = {{flex : 3}}>
          <Text style = {styles.profile_name}>Tan Dung</Text>
          <Text style = {styles.profile_professional}>Developer</Text>
          <View style = {{ flexDirection : 'row', marginVertical : 10 }}>
            <TouchableOpacity
              style = {styles.followBtnBg}
              onPress = { () => Alert.alert("follow !")}
              >
              <Text style = {styles.followBtnText}>Follow</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style = {styles.sentBtnBg}
              onPress = { () => Alert.alert("follow !")}
              >
              <Image source = {require('./assets/plane.png')} style = {styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style = {{flexDirection : "row", justifyContent : "space-around", marginHorizontal : 20, marginVertical : 10 }}>
        <View style = {{flex : 1, alignItems : 'center'}}>
          <Text style = {styles.followNumber}>210</Text>
          <Text style = {styles.followText}>Photos</Text>
        </View>

        <View style = {{flex : 1, alignItems : 'center'}}>
          <Text style = {styles.followNumber}>15K</Text>
          <Text style = {styles.followText}>Followers</Text>
        </View>

        <View style = {{flex : 1, alignItems : 'center'}}>
          <Text style = {styles.followNumber}>605</Text>
          <Text style = {styles.followText}>Following</Text>
        </View>
      </View>
      <View style={{ height : 530 }}>
      <ScrollView contentContainerStyle = {{flexDirection : "row",  }}>
        <View>
          {
            imgData.slice(0,centerImgData).map( (item,index) => {
              return <Image key = {index}  source={item.imgSource} style = {styles.image}/>
            })
          }
        </View>

        <View>
          {
            imgData.slice(centerImgData).map( (item,index) => {
              return <Image key = {index}  source={item.imgSource} style = {styles.image}/>
            })
          }
        </View>
      </ScrollView>
    </View>
    <View style = {{flexDirection : "row",alignItems:'center', justifyContent: 'center', flex : 1, width : Dimensions.get('window').width}}>
      <Image style = {styles.bottomIcon}  source = {require('./assets/main-file.png')}/>
      <Image style = {styles.bottomIcon}  source = {require('./assets/plus.png')}/>
      <Image style = {styles.bottomIcon}  source = {require('./assets/avatar.png')}/>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop : 70,
    padding : 10,
  },
  avatar : {
    width : 90,
    height : 90,
    resizeMode : 'contain',
    borderRadius : 45,
    marginHorizontal : 30,
    flex : 1
  },
  profile_name : {
    fontWeight: 'bold',
    fontSize : 30
  },
  profile_professional : {
    fontSize : 15,
    fontWeight : '200',
    color : 'gray'
  },
  followBtnBg : {
    backgroundColor : 'rgb(71,113,246)',
    width : 100,
    marginRight : 10,
    borderRadius : 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  followBtnText : {
    color : "white",
    paddingHorizontal : 20,
    paddingVertical : 10,
    textAlign : 'center',
  },

  icon : {
    height : 20,
    width : 20,
  },
  sentBtnBg : {
    backgroundColor : 'rgb(120,213,250)',
    borderRadius : 20,
    justifyContent : 'center',
    alignItems : 'center',
    width : 60,
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  followNumber : {
    fontWeight : 'bold',
    fontSize : 20
  },

  followText : {
    color : 'gray',
    fontSize : 15,
  },
  image : {
    height : 170,
    width :170,
    margin : 10,
    borderRadius : 20
  },
  bottomIcon : {
    width : 25,
    height : 25,
    resizeMode : 'contain',
    marginHorizontal : 20
  }

});
