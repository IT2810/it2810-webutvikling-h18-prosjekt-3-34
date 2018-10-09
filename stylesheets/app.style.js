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
     viewDateStyle: {
       backgroundColor: '#dedede',
       width: "85%",
     },
     addGoalButton: {
       justifyContent: "center",
       alignItems: "center",
       backgroundColor: "#a3b3c3",
       height: 40,
       width: 100,
       borderWidth: 1,
       //borderRadius: 100,
       borderRadius: 8,

     },
     emptySpace: {
       height: 40,
       width: 100,
     },
     buttonContainer: {
       marginTop: 20,
       width: "85%",
       flexDirection: "row",
       justifyContent: "flex-end"
     },
     addGoalText: {
       fontSize: 18,
     },
     kolonne: {
       padding: 10
     },
     text: {
       color: "white"
     }
   });
