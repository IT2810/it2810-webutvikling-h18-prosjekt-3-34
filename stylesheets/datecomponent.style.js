import {StyleSheet} from "react-native";

export default StyleSheet.create({
  dateBox: {
    backgroundColor: "#dedede",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  prevDay: {
   justifyContent: "center",
   alignItems: "center",
   backgroundColor: "#00c652",
   height: 35,
   width: 70,
   borderRadius: 5,
   borderWidth: 1,
 },

 nextDay: {
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#00c652",
  height: 35,
  width: 70,
  borderRadius: 5,
  borderWidth: 1,
},
dateText: {
  fontSize: 16,
  textAlignVertical: "center",
},
prevDayClicked: {
 justifyContent: "center",
 alignItems: "center",
 backgroundColor: "gray",
 height: 35,
 width: 70,
 borderRadius: 5,
 borderWidth: 1,
},

nextDayClicked: {
justifyContent: "center",
alignItems: "center",
backgroundColor: "gray",
height: 35,
width: 70,
borderRadius: 5,
borderWidth: 1,
},

})
