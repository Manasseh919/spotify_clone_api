import { StyleSheet, FlatList } from "react-native";

import { tracks } from "../../../assets/data/tracks";
import { Text, View } from "../../components/Themed";
import TrackListItem from "../../components/TrackListItem";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";

export default function SearchScreen() {
  const [search, setSearch] = useState("Default Search");
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <FontAwesome name="search" size={16} color="gray" />
        <TextInput
        value={search}
        placeholder="What do you want to listen to?"
        onChangeText={setSearch}
        style={styles.input}
        />
        <Text onPress={()=> setSearch('')} style={{ color: "white" }}>Cancel</Text>
      </View>
      <FlatList
        data={tracks}
        renderItem={({ item }) => <TrackListItem track={item} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    backgroundColor: "#121314",
    color: "white",
    flex: 1,
    marginHorizontal: 10,
    padding: 8,
    borderRadius: 5,
  },
});
