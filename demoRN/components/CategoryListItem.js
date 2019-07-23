import React from 'react'
import {
  Image,
  View,
  Text,
  StyleSheet
} from 'react-native'
import SkiiImage from '../assets/alpine.png'
export default function CategoryListItem(props){
  return <View style = {styles.container}>
    <Text>CategoryListItem</Text>
    <Image style = {styles.categoryImage} source = {SkiiImage}/>
  </View>
}

const styles = StyleSheet.create({
  categoryImage : {
    width : 64,
    height : 64,
  },
  container : {
    alignItems : 'center',
    marginBottom : 16,
    padding : 16,
    borderRadius : 4,
    backgroundColor : '#FFF',
    shadowColor : "#000",
    shadowOpacity : 0.3,
    shadowRadius : 10,
    shadowOffset : { width : 0, height : 0}
  },
  title : {
    textTransform : 'uppercase',
    marginBottom : 8,
    fontWeight : '700'
  }
})
