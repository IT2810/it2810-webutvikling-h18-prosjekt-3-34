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
      knapp: {
        justifyContent: "center",
        alignItems: "center",
        height: 35,
        width: 35,
      },
});
