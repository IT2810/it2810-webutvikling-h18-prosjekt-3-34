import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import PedoMeter from "./components/pedometer.js"
import ToDoList from "./components/todolist.js"

export default class App extends Component {

   alertItemName = (item) => {
      alert("asdasdasda")
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
            <ToDoList>
            </ToDoList>

            <PedoMeter>
            </PedoMeter>

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

   kolonne: {
     padding: 10,
   },
    text: {
       color: '#4f603c'
    },
})
