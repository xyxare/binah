import { CameraView } from "expo-camera";
import { View } from "react-native";
import "../assets/images/binah_logo.svg";
import SmallMenuButton from "../components/smallMenuButton";
import appStyle from "../styles/appStyle";

const Recording = () => {
  return (
    <View style={appStyle.recordingHeader}>
      <CameraView style={{ height: "30vh", width: "50vh" }} />
      <SmallMenuButton text="hi" destination="/" />
    </View>
  );
};

export default Recording;
