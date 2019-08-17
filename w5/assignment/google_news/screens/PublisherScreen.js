import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Linking } from 'react-native';
import ShortArticle from '../components/ShortArticle'
import { ListItem } from 'react-native-elements'

export default function PublisherScreen(props) {
  console.log("hell")
    const articles = props.navigation.getParam('articles',[])
    console.log(articles)

    return (
        <View style = {styles.container}>
            {
                articles.map((article, i) => (
                <ListItem
                    key={i}
                    title={article.source.name}
                    subtitle={"Articles: " +  articles.filter( article_children => article.source.name === article_children.source.name).length}
                />
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop : 20,
  },
  row: {
    flexDirection: 'row',
    marginTop : 30
  },
  label: {
    fontSize: 16,
    color: 'black',
    marginRight: 10,
    fontWeight: 'bold'
  },
  info: {
    fontSize: 16,
    color: 'grey',
  }
});
