import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Linking } from 'react-native';
import ShortArticle from '../components/ShortArticle'
import { SearchBar } from 'react-native-elements';

export default function SearchScreen(props) {
    const [search, setSearch] = useState("")
    const {articles} = props.navigation.getParam('articles',[])
    const [searchItems, setSearchItems] = useState([])
    updateSearch = search => {
        setSearch({ search });
    }
    searchAction = _ => {
        searchResult = articles.filter( article => article.title.includes(search))
        setSearchItems(searchResult)

    }
    return (
        <View style = {styles.container}>
            {/* <SearchBar
                placeholder="Type Here..."
                onChangeText={updateSearch}
                value={search}
                searchIcon = {<Icon
                    raised
                    name='heartbeat'
                    type='font-awesome'
                    color='#f50'
                    onPress={() => searchAction()} />}
            />
            {
                searchItems.map( (item, i) => (
                    <ListItem
                        key={i}
                        title={item.name}/>
                    ))
            } */}
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
