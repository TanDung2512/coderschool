import React , { useState }from 'react';
import { Text, View, Alert, StyleSheet, TouchableOpacity, ScrollView,ImageBackground, KeyboardAvoidingView } from 'react-native';
  
export default TodoItem = props => {
  const statusStyle = {
    backgroundColor: props.todo.status === 'Done' ? 'blue' : 'green'
  };
  const onLongPress = todo => {
    const prompt = `"${todo.body}"`;
    Alert.alert(
      'Delete your todo?',
      prompt,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'OK', onPress: () => props.onDeleteTodo(todo.id) }
      ],
      { cancelable: true }
    );
  };
    return (
      <TouchableOpacity
        key={props.todo.body}
        style={[styles.todoItem, statusStyle]}
        onLongPress={() => onLongPress(props.todo)}
        onPress={() => props.onToggleTodo()}
      >
        <Text style={styles.todoText}>
          {props.idx + 1}: {props.todo.body}
        </Text>
      </TouchableOpacity>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#fff',
      justifyContent: 'center'
    },
    todoItem: {
      margin: 5,
      padding: 10,
      width: '95%',
      minHeight: 20,
      color: 'white',
      borderRadius: 5,
      flexWrap: 'wrap'
    },
    todoText: {
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold'
    },
    todoInput: {
      width: '95%',
      minHeight: 30,
      color: 'white',
      borderWidth: 1,
      marginTop: '20%',
      marginBottom: '5%',
      borderColor: 'grey'
    },
    inputContainer: {
      flex: 1,
      width: '90%',
      marginTop: 20,
      marginBottom: '10%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    button: {
      height: 50,
      width: '50%',
      borderRadius: 10,
      alignItems: 'center',
      backgroundColor: 'blue',
      justifyContent: 'center'
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold'
    }
  });