import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Button, Vibration } from 'react-native'

handleDoneClick = (item) => {
   alert("MARK THIS AS DONE");

}

handleDeleteClick = (item) => {
   alert("DELETE THIS")
}



export default class ItemComponent extends Component {
  render () {
    return (
      <View style={styles.itemComponent}>

          <Text style={styles.textStyle}> - ToDoItem - </Text>

            <View style={styles.buttonView}>

              <View style={styles.doneButton} onPress={handleDoneClick}>
              <Text style={styles.textStyle}>Done</Text>
              </View>

              <View style={styles.deleteButton} onPress={handleDeleteClick}>
              <Text style={styles.textStyle}>Delete</Text>
              </View>

            </View>

      </View>
    );
  }
}

const styles = StyleSheet.create ({
  itemComponent: {
    flexDirection: "row",
    backgroundColor: "#bdbdbd",
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    marginTop: 10,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  buttonView: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  doneButton: {
    backgroundColor: "#a5d6a7",
    height: 30,
    width: 50,
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteButton: {
    backgroundColor: "#ef9a9a",
    height: 30,
    width: 70,
    marginLeft: 5,
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontFamily: 'GillSans-BoldItalic',
  }
});
