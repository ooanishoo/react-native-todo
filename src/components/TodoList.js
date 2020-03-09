import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function TodoList(props) {
  const {todos} = props.todos;
  console.log(todos);
  return (
    <ScrollView>
      
      <View style={styles.listTile}>
        <Icon name="square" style={styles.leading} size={20} />
        <Text style={styles.title}>hellos</Text>
        <Icon name="trash-2" style={styles.trailing} size={20} />
      </View>
      <View style={styles.listTile}>
        <Icon name="square" style={styles.leading} size={20} />
        <Text style={styles.title}>hellos</Text>
        <Icon name="trash-2" style={styles.trailing} size={20} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  listTile: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    padding:10,
    borderBottomWidth:0.5,
    borderBottomColor: "#666666"
  },
  leading: {
     width: "20%"
  },
  title: {
    width: "60%",
    fontSize: 18
  },
  trailing: {
     width: "20%"
  }
});
