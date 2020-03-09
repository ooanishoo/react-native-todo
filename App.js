import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppBar from './src/components/AppBar'
import Todo from './src/components/Todo'
import TodoList from './src/components/TodoList'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar}></View>
      <AppBar />
      <Todo />
      <TodoList />
      <Text>Todo Apps</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#7F39FB",
    color: "#fff",
    width: "100%",
    height: 30
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  appBar: {
    backgroundColor: "#7F39FB",
    color: "white",
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  heading: {
    color: "white",
    fontSize: 24,
    fontWeight: "400"
  }
});
