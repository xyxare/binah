import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import "../assets/images/button_side.svg";
import menuStyleSheet from "../styles/mainMenuStyle";

const BigMenuButton = ({ text = "Play", destination }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        destination ? router.push(destination) : window.alert("destination WIP")
      }
      style={menuStyleSheet.menu_button_big}
    >
      <Image
        style={{ width: 220, height: 123 }}
        source={require("../assets/images/button_side.svg")}
      />
      <View style={menuStyleSheet.menu_text_big}>
        <Text style={menuStyleSheet.menu_text_big}>{text}</Text>
      </View>
      <Image
        style={menuStyleSheet.button_side_image}
        source={require("../assets/images/record_logo.svg")}
      />
    </TouchableOpacity>
  );
};

export default BigMenuButton;
