import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native'
import ItemComponent from './itemcomponent.js'

export default class ToDoList extends Component {
  state = {
     rader: [
        {
           id: 0,
           inputid: 'input1',
           fragmentid: 'frag1',
           name: 'Rad 1',
        },
        {
           id: 1,
           inputid: 'input2',
           fragmentid: 'frag2',
           name: 'Rad 2',
        },
        {
           id: 2,
           inputid: 'input3',
           fragmentid: 'frag3',
           name: 'Rad 3',
        },
        {
           id: 3,
           inputid: 'input4',
           fragmentid: 'frag4',
           name: 'Rad 4',
        },
        {
           id: 5,
           inputid: 'input5',
           fragmentid: 'frag5',
           name: 'Rad 5',
        },
        {
           id: 6,
           inputid: 'input6',
           fragmentid: 'frag6',
           name: 'Rad 6',
        },
     ]
  }

  render () {
    return (
      <ScrollView style={styles.container}>
         {
            this.state.rader.map((item) => (
              <React.Fragment key={item.fragmentid}>

               <TouchableOpacity
                  key = {item.id}
                  style = {[styles.rad]}
                  onPress = {() => this.alertItemName(item)}>

                  <Text key= {item.id} style = {styles.text}>
                     {item.name}
                  </Text>
               </TouchableOpacity>

               <ItemComponent
               key = {item.inputid}/>
               </React.Fragment>
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
    borderWidth: 1
  },
  text: {
     color: 'black',
     fontFamily: 'GillSans-BoldItalic',
     fontSize: 18

  },
  rad: {
     padding: 10,
     marginTop: 0,
     backgroundColor: '#ADD8E6',
     alignItems: 'center',
  },
});
