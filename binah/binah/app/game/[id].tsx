import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View } from "react-native";

import SmallMenuButton from "../../components/smallMenuButton";
import appStyle from "../../styles/appStyle";

const Game = () => {
  const { id } = useLocalSearchParams();
  const [game, setGame] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:5000/api/game/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setGame(data);
      });
  }, []);

  return (
    <View style={appStyle.appHeader}>
      {game.pgn} {game.name}
      <SmallMenuButton text="Return" destination="/gamesMenu" />
    </View>
  );
};

export default Game;
