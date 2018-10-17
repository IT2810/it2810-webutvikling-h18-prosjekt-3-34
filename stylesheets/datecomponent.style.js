import {StyleSheet} from "react-native";

export default StyleSheet.create({
  dateBox: {
    backgroundColor: "#dedede",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
    height:50,
  },
  todayText:{
    textAlign:"center",
    fontSize:18,
  },
  prevDay: {
   justifyContent: "center",
   alignItems: "center",
   backgroundColor: "#a3b3c3",
   height: 35,
   width: 60,
   borderRadius: 5,
   borderWidth: 1,
 },
 nextDay: {
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#a3b3c3",
  height: 35,
  width: 60,
  borderRadius: 5,
  borderWidth: 1,
},
dateText: {
  fontSize: 15,
  textAlign: "center",
  marginLeft: 10,
  marginRight: 10,
  marginBottom: 5,
  width: "58%",
},
prevDayClicked: {
 justifyContent: "center",
 alignItems: "center",
 backgroundColor: "lightgray",
 height: 35,
 width: 60,
 borderRadius: 5,
 borderWidth: 1,
},

nextDayClicked: {
justifyContent: "center",
alignItems: "center",
backgroundColor: "lightgray",
height: 35,
width: 60,
borderRadius: 5,
borderWidth: 1,
},

});
