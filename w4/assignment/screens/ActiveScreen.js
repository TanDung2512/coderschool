import React from 'react';
import { Text, View, Alert, StyleSheet, TouchableOpacity, ScrollView,ImageBackground, KeyboardAvoidingView } from 'react-native';
import { TODOS } from '../utils/data.js';
import TodoItem from '../components/TodoItem';
export default function ActiveScreen(props) {
  const onToggleTodo = todo => _ => {
    setTimeout(() => {
      props.navigation.navigate('SingleTodo', {
        updatedTodo: todo
      });
    }, 1000);
  };
  activeItems = TODOS.filter(todo => todo.status === "Active")
  return (
    <ScrollView>
      <View style={styles.container}>
        {activeItems.map((todo, idx) =>  
            <TodoItem
              idx={idx}
              todo={todo}
              key={todo.body}
              onToggleTodo = {onToggleTodo(todo)}
            />
        )}
        </View>
    </ScrollView>
  );
}

ActiveScreen.navigationOptions = {
  title: 'Active'
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