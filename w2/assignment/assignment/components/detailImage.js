import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert, ScrollView,Dimensions} from 'react-native';
import Expo from 'expo';
import * as Font from 'expo-font'

export default class App extends React.Component  {
  // const centerImgData = Math.floor(imgData.length / 2);
  constructor(props){
    super(props)

  }

  render(){
  return (

    <View style={styles.container}>
      <View style = {{ zIndex : 1, position : "absolute",flexDirection : "row",alignItems:'center', justifyContent : "space-between", marginVertical : 50, marginHorizontal : 0, width : Dimensions.get('window').width }}>
        <Image style = {styles.bottomIcon}  source = {require('./assets/left-arrow.png')}/>
        <Image style = {styles.bottomIcon}  source = {require('./assets/4dots.png')}/>
      </View>
    <Image style = {styles.image__main}  source = {require('./assets/image_1.jpg')}/>
    <View style = {{ paddingHorizontal : 20, paddingTop : 40}}>
      <View style = {{flexDirection : "row", alignItems : "center", justifyContent : "space-between"}}>
        <View>
          <Text style = {styles.image__name}>Eiffel Tower</Text>
          <View style = {{flexDirection : "row"}}>
            <Image source = {require('./assets/placeholder.png')} style = {styles.icon}/>
            <Text style = {styles.image__location}>Paris, Franch</Text>
          </View>
        </View>
        <TouchableOpacity>
          <View style = {styles.cloudBg}>
            <Image source = {require('./assets/cloud-computing.png')} style = {styles.cloud}/>
          </View>
        </TouchableOpacity>

      </View>
      <Text style = {{marginVertical : 20}}>
        Far concluded not his something extremity. Want four we face an he gate. On he of played he ladies answer little though nature. Blessing oh do pleasure as so formerly.
      </Text>
      <View style = {{flexDirection : "row"}}>
        <View style = {styles.hashtag}><Text style = {styles.hashtagText}>#photography</Text></View>
        <View style = {styles.hashtag}><Text style = {styles.hashtagText}>#sea</Text></View>
      </View>

      <View style = {{flexDirection : "row", justifyContent : "space-between", marginTop : 40}}>
        <View style = {{flexDirection : "row"}}>
          <Image source = {require('./assets/like.png')} style = {styles.cloud}/>
          <Image source = {require('./assets/speech-bubble.png')} style = {styles.cloud}/>
        </View>
        <Image source = {require('./assets/sharethis-logo.png')} style = {styles.cloud}/>

      </View>

    </View>
    <View style = {{position : "absolute", bottom : 30, flexDirection : "row",alignItems:'center', justifyContent: 'center', flex : 1, width : Dimensions.get('window').width}}>
      <Image style = {styles.bottomIcon}  source = {require('./assets/main-file.png')}/>
      <Image style = {styles.bottomIcon}  source = {require('./assets/plus.png')}/>
      <Image style = {styles.bottomIcon}  source = {require('./assets/avatar.png')}/>
    </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  avatar : {
    width : 90,
    height : 90,
    resizeMode : 'contain',
    borderRadius : 45,
    marginHorizontal : 30,
    flex : 1
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
    marginHorizontal : 20,
  },
  image__main : {
     width : Dimensions.get('window').width ,
     height : Dimensions.get('window').height/2,
     borderRadius : 30,
  },
  image__name : {
    fontSize : 30,
    fontWeight : 'bold',
  },
  image__location : {
    color : 'gray',
  },
  hashtag : {
    backgroundColor : "rgb(245,247,251)",
    borderRadius : 20,
    marginHorizontal : 5,
  },
  hashtagText : {
    color : 'rgb(188,191,210)',
    paddingHorizontal : 10,
    paddingVertical : 5,
  },
  cloud : {
    height : 30,
    width : 30,
    marginHorizontal : 5
  },
  cloudBg : {
    backgroundColor : 'rgb(71,113,246)',
    padding : 7,
    borderRadius : 15,
    borderTopLeftRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  }

});
