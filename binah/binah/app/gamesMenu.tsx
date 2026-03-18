import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import GameButton from "../components/gameButton";
import SmallMenuButton from "../components/smallMenuButton";
import appStyle from "../styles/appStyle";
import gameMenuStyleSheet from "../styles/gameMenuStyle";

const GamesMenu = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/games")
      .then((res) => res.json())
      .then((data) => {
        setGames(data);
      });
  }, []);

  return (
    <View style={appStyle.appHeader}>
      <Text style={gameMenuStyleSheet.menu_text}>My Games</Text>
      <ScrollView contentContainerStyle={gameMenuStyleSheet.big_container}>
        {games.map((game) => {
          const gamesUrl = `/game/${game.id}`;
          return <GameButton text={game.name} destination={gamesUrl} />;
        })}
      </ScrollView>
      <SmallMenuButton text="Go Back" destination={"/"} />
    </View>
  );
};

export default GamesMenu;
