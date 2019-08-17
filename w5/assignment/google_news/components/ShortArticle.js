import React from 'react';
import { StyleSheet, Text, View, Linking,Dimensions } from 'react-native';
import moment from 'moment';
import { Card, Button, Icon } from 'react-native-elements';
const screenWidth = Dimensions.get('window').width
export default function ShortArticle(props) {
    const {article} = props
    const onPress = url => {
        Linking.canOpenURL(url).then(supported => {
          if (supported) {
            Linking.openURL(url);
          } else {
            console.log(`Don't know how to open URL: ${url}`);
          }
        });
      };
  return (
    
    <Card title={article.title} image={{uri: article.urlToImage}} containerStyle={styles.containerCard}>
    <View style={styles.row}>
        <Text style={styles.label}>Source</Text>
        <Text style={styles.info}>{article.source.name}</Text>
    </View>
    <Text style={{marginBottom : 10}}>{article.content}</Text>
    <View style={styles.row}>
        <Text style={styles.label}>Published</Text>
        <Text style={styles.info}>
        {moment(article.publishedAt).format('LLL')}
        </Text>
    </View>
    <Button icon={<Icon />} onPress={() => onPress(article.url)} title="Read more" backgroundColor="#03A9F4" />
    </Card>
  );
}

const styles = StyleSheet.create({
    containerFlex: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    container: {
      flex: 1,
      marginTop: 40,
      alignItems: 'center',
      backgroundColor: '#fff',
      justifyContent: 'center'
    },
    header: {
      height: 30,
      width: '100%',
      backgroundColor: 'pink'
    },
    row: {
      flexDirection: 'row'
    },
    label: {
      fontSize: 16,
      color: 'black',
      marginRight: 10,
      fontWeight: 'bold'
    },
    info: {
      fontSize: 16,
      color: 'grey'
    },
    containerCard:{
      width : screenWidth - 24,
      height : 500
    }
  });
