import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, Button, Picker } from 'react-native'
import StepCounter from "./components/stepcounter.js"
import ToDoList from "./components/todolist.js"

export default class App extends Component {
  state = {
     items: [
        {
           id: 0,
           inputid: 'input1',
           name: 'Rad 1',
        },
        {
           id: 1,
           inputid: 'input2',
           name: 'Rad 2',
        }
     ]
  }

addItem = () => {

}

   render() {
      return (
        <React.Fragment>


          <View style={styles.topBorder}>
          </View>

          <View style={styles.banner}>
          <Text style={styles.textStyleBanner}>{"DAGSPLANLEGGER'N"}</Text>
          <Text style={styles.textStyleTM}>{"TM"}</Text>
          </View>


          <View style={styles.siteContainer}>
            <ToDoList items={this.state.items}/>

            <StepCounter />

            <View style={styles.addItemButton} title="Done" color="black" onPress={handleDoneClick}/>

          </View>
         </React.Fragment>
      )
   }
}

const styles = StyleSheet.create ({
  siteContainer: {
    backgroundColor: '#dedede',
    height: '100%',
    marginTop: 0,
    alignItems: "center",
  },
  topBorder: {
    height: 20,
    backgroundColor: '#dedede'
  },
  banner: {
    backgroundColor: '#dedede',
    marginTop: 0,
    justifyContent: 'center',
    height: 80,
    flexDirection: 'row'
  },
   textStyleBanner: {
     fontFamily: 'GillSans-BoldItalic',
     fontSize:22,
    lineHeight:80,
    textAlignVertical: 'top',
    color: 'black',
  },
   textStyleTM: {
     fontFamily: 'GillSans-BoldItalic',
     fontSize:9,
     lineHeight:60,
     textAlignVertical: 'top',
     color: 'black',
   },
   addItemButton: {
    backgroundColor: "black",
    height: 35,
    width: 35,
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 15,
   },
   kolonne: {
     padding: 10,
   },
    text: {
       color: '#4f603c'
    },
})
