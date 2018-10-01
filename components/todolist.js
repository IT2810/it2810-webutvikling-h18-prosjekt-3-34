import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native'
import ItemComponent from './itemcomponent.js'

export default class ToDoList extends Component {


  render () {
    return (
      <ScrollView style={styles.container}>
         {
                this.props.items.map((item) => (
                  <ItemComponent id={item.id}
                  key={item.inputid}
                  handleDelete={this.props.handleDelete}
                  status={this.props.status}/>
                ))
          }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
    maxHeight:300,
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    width: "85%",

  },
  text: {
     color: 'black',
     
     fontSize: 18

  },
  rad: {
     padding: 10,
     marginTop: 0,
     backgroundColor: '#ADD8E6',
     alignItems: 'center',
  }
});
