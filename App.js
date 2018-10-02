import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, Button, Picker } from 'react-native'
import StepCounter from "./components/stepcounter.js"
import ToDoList from "./components/todolist.js"
import DateComponent from "./components/datecomponent.js"

export default class App extends Component {

  state = {
     items: [],
     itemCounter:0,
     completedItems: [],
     viewDate: new Date()
  }

addItem = () => {
  let newList = this.state.items.slice();
  newList.push({
     id: this.state.itemCounter,
     inputid: 'input' + this.state.itemCounter,
     name: 'Rad ' + this.state.itemCounter,
  })
  this.setState({items:newList});
  this.state.itemCounter++;
}

handleDeleteClick = (index) => {
    if (this.state.items.length > 0) {
    var newList = []
    this.state.items.forEach(function(element) {
      if (element.id != index) {
          newList.push({
             id: element.id,
             inputid: 'input' + element.inputid,
             name: 'Rad ' + element.name,
          });
      }
    });

    this.setState({items:newList});
  }
}


handlePrevDayClick = () => {
  let currentDate = new Date()
  if(this.state.viewDate.getDate() !== currentDate.getDate()-1){
    this.setState({
      viewDate: new Date(this.state.viewDate.setDate(this.state.viewDate.getDate()-1))
    })
  }
}

handleNextDayClick = () => {
  let currentDate = new Date()
  if(this.state.viewDate.getDate() !== currentDate.getDate()+1){
    this.setState({
      viewDate: new Date(this.state.viewDate.setDate(this.state.viewDate.getDate()+1))
    })
  }
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

          <View>
            <DateComponent viewDate={this.state.viewDate} handlePrevDayClick={this.handlePrevDayClick} handleNextDayClick={this.handleNextDayClick}/>
          </View>

          <View style={styles.siteContainer}>
            <ToDoList items={this.state.items} handleDelete={this.handleDeleteClick}/>

            <StepCounter />

            <TouchableOpacity style={styles.addItemButton} color="black" onPress={this.addItem}>
            <Text style={styles.text}>Add New Item</Text>
            </TouchableOpacity>

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

     fontSize:22,
    lineHeight:80,
    textAlignVertical: 'top',
    color: 'black',
  },
   textStyleTM: {

     fontSize:9,
     lineHeight:60,
     textAlignVertical: 'top',
     color: 'black',
   },
   addItemButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4f4f4f",
    height: 35,
    width: 110,
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 15,
   },
   kolonne: {
     padding: 10,
   },
    text: {
       color: "white",
    },
})
