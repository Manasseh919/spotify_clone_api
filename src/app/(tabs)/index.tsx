import { StyleSheet, FlatList } from "react-native";

import { tracks } from "../../../assets/data/tracks";
import { Text, View } from "../../components/Themed";
import TrackListItem from "../../components/TrackListItem";

export default function HomeScreen() {
  return (
    <FlatList
      data={tracks}
      renderItem={({ item }) => <TrackListItem track={item} />}
      showsVerticalScrollIndicator={false}
      style={{backgroundColor:'black'}}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
