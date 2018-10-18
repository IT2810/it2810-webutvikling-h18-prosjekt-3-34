import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  buttonView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  doneButton: {
    backgroundColor: "#a5d6a7",
    height: 30,
    width: 45,
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  deleteButton: {
    backgroundColor: "#ef9a9a",
    height: 30,
    width: 48,
    marginLeft: 5,
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyleText: {
    textAlign: "center",
  },
  textStyle: {
    width: "60%",
  },
  itemComponent: {
    flexDirection: "row",
    backgroundColor: "#bdbdbd",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 50,
    marginTop: 10,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    width: "100%",
  },
  itemComponentDone: {
    flexDirection: "row",
    backgroundColor: "#a5d6a7",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 50,
    marginTop: 10,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    width: "100%",
  }
});
