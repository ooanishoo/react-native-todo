import React from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

export default function Todo() {
  return (
    <View style={styles.todo}>
      <TextInput placeholder="Add a todo" style={styles.textbox} />
      <Button 
        title="Add" 
        color='#7F39FB' 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    width: "100%",
    justifyContent:'center',
    alignItems:'center'
  },
  textbox: {
    borderWidth: 1,
    borderColor: "#7F39FB",
    borderRadius: 8,
    padding: 10,
    margin: 10,
    width:'80%'
  }
});
