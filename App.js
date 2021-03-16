import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
} from "react-native";
import AppBar from "./src/components/AppBar";
import AddTodo from "./src/components/AddTodo";
import TodoItem from "./src/components/TodoItem";

export default function App() {
  const [title, setTitle] = useState("");

  // Initalize empty array to store todos
  const [todos, setTodos] = useState([]);

  // function to add todo object in todo list
  const addTodo = () => {
    if (title.length > 0) {
      // Add todo to the list
      setTodos([...todos, { key: Date.now(), name: title, isChecked: false }]);
      // clear the value of the textfield
      setTitle("");
    }
  };

  // function to mark todo as checked or unchecked
  const checkTodo = (id) => {
    // loop through todo list and look for the the todo that matches the given id param
    // update the state using setTodos function
    setTodos(
      todos.map((todo) => {
        if (todo.key === id) {
          todo.isChecked = !todo.isChecked;
        }
        return todo;
      })
    );
  };

  // function to delete todo from the todo list
  const deleteTodo = (id) => {
    // loop through todo list and return todos that don't match the id
    // update the state using setTodos function
    setTodos(
      todos.filter((todo) => {
        return todo.key !== id;
      })
    );
  };

  useEffect(() => {
    console.log(todos.length, "TodoList length");
    //console.log(todos);
  }, [todos]);

  return (
    <View style={styles.container}>
      <View style={styles.statusBar}></View>
      <AppBar />
      <View style={styles.todo}>
        <AddTodo
          placeholder="Add a todo"
          title={title}
          setTitle={setTitle}
          style={styles.textbox}
          addTodo={addTodo}
        />
      </View>

      <ScrollView>
        {todos.map((todo) => (
          <TodoItem
            key={todo.key}
            todo={todo}
            checkTodo={checkTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#7F39FB",
    color: "#fff",
    width: "100%",
    height: 30,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  todo: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textbox: {
    borderWidth: 1,
    borderColor: "#7F39FB",
    borderRadius: 8,
    padding: 10,
    margin: 10,
    width: "80%",
  },
});
