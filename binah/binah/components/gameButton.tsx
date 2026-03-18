import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import "../assets/images/button_side.svg";
import gameMenuStyleSheet from "../styles/gameMenuStyle";

const GameButton = ({ text = "Play", destination }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        destination ? router.push(destination) : window.alert("destination WIP")
      }
      style={gameMenuStyleSheet.menu_button}
    >
      <Image
        style={{ width: "15vh", height: 67 }}
        source={require("../assets/images/button_side.svg")}
      />
      <View>
        <Text numberOfLines={1} style={gameMenuStyleSheet.menu_text}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default GameButton;
