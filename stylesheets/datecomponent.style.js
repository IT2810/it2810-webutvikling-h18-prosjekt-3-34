import {StyleSheet} from "react-native";

export default StyleSheet.create({
  dateBox: {
    backgroundColor: "#dedede",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },

  prevDay: {
   justifyContent: "center",
   alignItems: "center",
   backgroundColor: "#a3b3c3",
   height: 35,
   width: 70,
   borderRadius: 5,
   borderWidth: 1,
 },

 nextDay: {
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#a3b3c3",
  height: 35,
  width: 70,
  borderRadius: 5,
  borderWidth: 1,
},
dateText: {
  fontSize: 16,
  textAlignVertical: "center",
  marginLeft: 10,
  marginRight: 10,
},
prevDayClicked: {
 justifyContent: "center",
 alignItems: "center",
 backgroundColor: "lightgray",
 height: 35,
 width: 70,
 borderRadius: 5,
 borderWidth: 1,
},

nextDayClicked: {
justifyContent: "center",
alignItems: "center",
backgroundColor: "lightgray",
height: 35,
width: 70,
borderRadius: 5,
borderWidth: 1,
},

});
