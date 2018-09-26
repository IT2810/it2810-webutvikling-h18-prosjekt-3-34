import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

export default class List extends Component {
   state = {
      rader: [
         {
            id: 0,
            name: 'Rad 1',
         },
         {
            id: 1,
            name: 'Rad 2',
         },
         {
            id: 2,
            name: 'Rad 3',
         },
         {
            id: 3,
            name: 'Rad 4',
         }
      ]
   }
   alertItemName = (item) => {
      alert("asdasdasda")
   }
   render() {
      return (
         <View style={styles.mainContainer}>
            {
               this.state.rader.map((item) => (

                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.rad}
                     onPress = {() => this.alertItemName(item)}>

                     <Text key= {item.id} style = {styles.text}>
                        {item.name}
                     </Text>
                  </TouchableOpacity>

               ))
            }
         </View>
      )
   }
}

const styles = StyleSheet.create ({
  mainContainer: {
    marginTop: 15
  },
  kolonne: {
    padding: 10,
  },
   rad: {
      display: 'flex',
      padding: 10,
      marginTop: 5,
      backgroundColor: '#d9f9b1',
      alignItems: 'center',
   },
   text: {
      color: '#4f603c'
   }
})
