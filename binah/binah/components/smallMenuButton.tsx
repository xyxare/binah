import { router } from "expo-router";
import { Image, Text, TouchableOpacity } from "react-native";
import menuStyleSheet from "../styles/mainMenuStyle";

const SmallMenuButton = ({ text = "Play", destination }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        destination ? router.push(destination) : window.alert("destination WIP")
      }
      style={menuStyleSheet.menu_button_small}
    >
      <Image
        style={{ width: 100, height: 67 }}
        source={require("../assets/images/button_side.svg")}
      />
      <Text style={menuStyleSheet.menu_text_small}>{text}</Text>
    </TouchableOpacity>
  );
};

export default SmallMenuButton;
