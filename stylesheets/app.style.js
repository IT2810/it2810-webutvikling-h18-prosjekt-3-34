import {StyleSheet} from 'react-native'

export default StyleSheet.create({
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
     addGoalButton: {
       justifyContent: "center",
       alignItems: "center",
       backgroundColor: "white",
       height: 50,
       width: 50,
       borderRadius: 100,
       position: "absolute",
       right: 20,
       top: 440 //TODO: Change this to bottom
     },
     //knapper inne i modal
     addItemBtn: {
       justifyContent: "center",
       alignItems: "center",
       margin: 10
     },
     //Tekst i modalknapp
     modalText: {
       fontSize: 20
     },
     modal: {
       backgroundColor: "white"
     },

     addGoalText: {
       fontSize: 40
     },
     kolonne: {
       padding: 10
     },
     text: {
       color: "white"
     }
   });
