import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Linking } from 'react-native';
import ShortArticle from '../components/ShortArticle'

export default function HomeScreen(props) {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [hasErrored, setHasApiError] = useState(false);
  const [lastPageReached, setLastPageReached] = useState(false);

  const getNews = async () => {
    if (lastPageReached) return;
    setLoading(true);
    try{
      
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=bab28b9541b74bef83035ad8dc22e7c8&page=${pageNumber}`
      );
      const jsonData = await response.json()
      const hasMoreArticles = jsonData.articles.length > 0;
      if (hasMoreArticles) {
        const newArticleList = filterForUniqueArticles(
          articles.concat(jsonData.articles)
        );

        // setArticles(newArticleList);
        setArticles(articles.concat(jsonData.articles));
        setPageNumber(pageNumber + 1);

        if(props.navigation){
          props.navigation.setParams({'articles': newArticleList})
          console.log("hell")
        }
      } else {
        setLastPageReached(true);
      }
    }
    catch(error){
      setHasApiError(true);
    }
    setLoading(false);
  };

  const filterForUniqueArticles = arr => {
    const cleaned = [];
    arr.forEach(itm => {
      let unique = true;
      cleaned.forEach(itm2 => {
        const isEqual = JSON.stringify(itm) === JSON.stringify(itm2);
        if (isEqual) unique = false;
      });
      if (unique) cleaned.push(itm);
    });
    return cleaned;
  };

  useEffect(()=>{getNews()},[]);
  if (hasErrored) {
    return (
      <View style={styles.container}>
        <Text>Error =(</Text>
      </View>
    );
  }
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Articles Count:</Text>
        <Text style={styles.info}>{articles.length}</Text>
      </View>
      <View style={{flex: 1}} >
      <FlatList
        style={{ width: '100%' }}
        data={articles}
        renderItem={ ({item}) => <ShortArticle article = {item}/>}
        keyExtractor={(item) => item.title}
        onEndReached={() => getNews()} 
        onEndReachedThreshold={1}
        ListFooterComponent={lastPageReached ? <Text>No more articles</Text> : <ActivityIndicator size="large" loading={loading}/>}
      />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
