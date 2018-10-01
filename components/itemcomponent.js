import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Button, Vibration } from 'react-native'


export default class ItemComponent extends Component {
  state = {
    backgroundColor: "#bdbdbd",
  }

  handleDoneClick = () => {
    this.setState({backgroundColor:"green"});
  }

  render () {
    const styles = StyleSheet.create ({
      itemComponent: {
        flexDirection: "row",
        backgroundColor: this.state.backgroundColor,
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
        
      }
    });

    return (
      <View style={styles.itemComponent}>

          <Text style={styles.textStyle}> - ToDoItem Nr {this.props.id}- </Text>

            <View style={styles.buttonView}>

              <TouchableOpacity style={styles.doneButton} onPress={this.handleDoneClick}>
              <Text style={styles.textStyle}>Done</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.deleteButton} onPress={ () => this.props.handleDelete(this.props.id)}>
              <Text style={styles.textStyle}>Delete</Text>
              </TouchableOpacity>

            </View>

      </View>
    );



  }
}
