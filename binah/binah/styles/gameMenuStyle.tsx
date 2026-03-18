import { StyleSheet } from "react-native";

const gameMenuStyleSheet = StyleSheet.create({
  big_container: {
    display: "flex",
    rowGap: 20,
    marginLeft: 0,
    justifyContent: "flex-start",
    outlineColor: "#F2FF43",
    width: "80vh",
    height: "67vh",
    paddingLeft: 0,
    paddingTop: 30,
    backgroundColor: "#292525",
  },
  menu_button: {
    flexDirection: "row",
    display: "flex",
    marginLeft: 20,
    justifyContent: "flex-start",
    columnGap: "55px",
    outlineColor: "#F2FF43",
    width: "60vh",
    height: 67,
    paddingLeft: 0,
    backgroundColor: "#292525",
    boxShadow: "0px 4px 3px 1px #F2FF43",
    outlineStyle: "solid",
    borderRadius: 10,
  },
  menu_text: {
    color: "#FFE365",
    flex: 1,
    fontFamily: "'Raleway', 'Arial', 'sans-serif'",
    textAlignVertical: "center",
    textAlign: "left",
    paddingTop: "6%",
    fontSize: 24,
    marginTop: "3%",
  },
});

export default gameMenuStyleSheet;
