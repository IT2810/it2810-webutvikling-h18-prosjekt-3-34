import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, Button, Picker, AsyncStorage } from 'react-native'
import StepCounter from "./components/stepcounter.js"
import ToDoList from "./components/todolist.js"
import styles from "./stylesheets/app.style.js";

export default class App extends Component {
  state = {
     items: [],
     itemCounter:0,
     completedItems: [],
  }

componentDidMount() {
  let storedArray = [];
  let currentCounter = 0;
  AsyncStorage.getAllKeys((err, keys) => {
  AsyncStorage.multiGet(keys, (err, stores) => {
    stores.map((result, i, store) => {
      // get at each store's key/value so you can work with it
        let key = parseInt(store[i][0]) +1;
        let value = store[i][1];
        this.setState({itemCounter:key});
        storedArray.push(JSON.parse(value));
        console.log(storedArray);
        this.setState({items:storedArray});
      });
    });
  });
}

storeItemData = async (items) => {
  try {
    let storeArray = [];
    for (let i = 0; i < items.length; i++ ) {
      storeArray.push([i.toString(), JSON.stringify(items[i])]);
    }
    await AsyncStorage.multiSet(storeArray);
  } catch (error) {
    alert("wat" + error);
  }
}

addItem = () => {
  let newList = this.state.items.slice();
  newList.push({
     id: this.state.itemCounter,
     inputid: 'input' + this.state.itemCounter,
     name: 'Rad ' + this.state.itemCounter,
  })
  this.storeItemData(newList);
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

handleClear = async () => {
  try {
    await AsyncStorage.clear();
  }
  catch(error){
    console.log(error);
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



          <View style={styles.siteContainer}>

            <ToDoList items={this.state.items} handleDelete={this.handleDeleteClick}/>

            <StepCounter />

            <TouchableOpacity style={styles.addItemButton} color="black" onPress={this.addItem}>
            <Text style={styles.text}>Add New Item</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.addItemButton} color="black" onPress={this.handleClear}>
            <Text style={styles.text}>clear</Text>
            </TouchableOpacity>


          </View>

         </React.Fragment>
      )
   }
}
