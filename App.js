import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import ItemComponent from "./components/itemComponent.js"

export default class App extends Component {
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
   alertItemName = (item) => {
      alert("asdasdasda")
   }
   render() {
      return (
        <React.Fragment>
        <View style={styles.banner}>
        <Text style={{ fontFamily: 'Helvetica', fontSize:18, lineHeight:80, textAlignVertical: 'top'}}>DAGSPLANLEGGERN</Text>
        <Text style={{ fontSize:8, lineHeight:8, textAlignVertical: 'top'}}>TM</Text>
        </View>
         <ScrollView style={styles.container}>
            {
               this.state.rader.map((item) => (
                 <React.Fragment key={item.fragmentid}>
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.rad}
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
         </React.Fragment>
      )
   }
}

const styles = StyleSheet.create ({
  container: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    maxHeight:200,
    borderWidth: 1
  },
  banner: {
    backgroundColor: 'lightblue',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    flexDirection: 'row'
  },
  kolonne: {
    padding: 10,
  },
   rad: {
      display: 'flex',
      padding: 10,
      marginTop: 0,
      backgroundColor: '#d9f9b1',
      alignItems: 'center',
   },
   text: {
      color: '#4f603c'
   }
})
