import { CameraView } from "expo-camera";
import { useRef, useState } from "react";
import { Image, Pressable } from "react-native";
import menuStyleSheet from "../styles/mainMenuStyle";

const RecordingButton = ({ text = "Record" }) => {
  const [recording, setRecording] = useState(false);
  const [image, setImage] = useState(
    <Image
      style={{ width: 50, height: 50, marginLeft: "12vh", marginTop: 11 }}
      source={require("../assets/images/record_logo.svg")}
    />,
  );
  const ref = useRef<CameraView>(null);

  const recordVideo = async () => {
    if (recording) {
      setRecording(false);
      setImage(
        <Image
          style={{ width: 50, height: 50, marginLeft: "12vh", marginTop: 11 }}
          source={require("../assets/images/record_logo.svg")}
        />,
      );
      ref.current?.stopRecording();
      return;
    }
    setRecording(true);
    setImage(
      <Image
        style={{ width: 100, height: 67 }}
        source={require("../assets/images/button_side.svg")}
      />,
    );

    const video = await ref.current?.recordAsync();
    console.log(`${video}`);
  };
  return (
    <Pressable onPress={recordVideo} style={menuStyleSheet.menu_button_small}>
      {image}
    </Pressable>
  );
};

export default RecordingButton;
