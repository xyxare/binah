import { Image, View } from "react-native";
import "../assets/images/binah_logo.svg";
import BigMenuButton from "../components/bigMenuButton";
import SmallMenuButton from "../components/smallMenuButton";
import appStyle from "../styles/appStyle";
import menuStyleSheet from "../styles/mainMenuStyle";

const Index = () => {
  return (
    <View style={appStyle.appHeader}>
      <Image
        source={require("../assets/images/binah_logo.svg")}
        style={{ width: "30vh", height: "30vh" }}
      />
      <BigMenuButton destination="recording" />
      <View style={menuStyleSheet.main_menu}>
        <SmallMenuButton text="Games" />
        <SmallMenuButton text="Insights" />
      </View>
    </View>
  );
};

export default Index;
