import React , { useState }from 'react';
import { Text, View, Alert, StyleSheet, TouchableOpacity, ScrollView,ImageBackground, KeyboardAvoidingView } from 'react-native';
import { TODOS } from '../utils/data.js';
import { TextInput } from 'react-native';
import TodoItem from '../components/TodoItem';
export default function AllScreen(props) {
  const [todoList, setTodoList] = useState(TODOS);
  const [todoBody, setTodoBody] = useState('');

  const onSubmitTodo = () => {
    const newTodo = {
      body: todoBody,
      status: 'Active',
      id: todoList.length + 1
    };
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
    setTodoBody('');
  };
  const onDeleteTodo = id => {
    const newTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(newTodoList);
  };
  const onToggleTodo = id => _ => {
    const todo = todoList.find(todo => todo.id === id);
    todo.status = todo.status === 'Done' ? 'Active' : 'Done';
    const foundIndex = todoList.findIndex(todo => todo.id === id);
    todoList[foundIndex] = todo;
    const newTodoList = [...todoList];
    setTimeout(() => {
      props.navigation.navigate('SingleTodo', {
        updatedTodo: todo
      });
    }, 1000);
    setTodoList(newTodoList);
  };
  return (
    <KeyboardAvoidingView
    enabled
    behavior="padding"
    style={{flex : 1}}
  >
  <ScrollView>
    <View style={styles.container}>
      {todoList.map((todo, idx) => {
        return (
          <TodoItem
            idx={idx}
            todo={todo}
            key={todo.body}
            onToggleTodo={onToggleTodo(todo.id)}
            onDeleteTodo={onDeleteTodo}
          />
        );
      })}
      <View style={styles.inputContainer}>
        <TextInput
          value={todoBody}
          style={styles.todoInput}
          onChangeText={text => setTodoBody(text)}
        />
        <TouchableOpacity style={styles.button} onPress={onSubmitTodo}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  </ScrollView>
  </KeyboardAvoidingView>
  );
}



AllScreen.navigationOptions = {
  title: 'All Todos'
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