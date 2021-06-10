import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";

const Groups = ({ navigation }) => {
  const [dif_groups, setGroups] = useState([
    { name: "The Boiz", key: "1" },
    { name: "Family", key: "2" },
    { name: "Ex. 1", key: "3" },
    { name: "Ex. 2", key: "4" },
    { name: "Ex. 3", key: "5" },
    { name: "Ex. 4", key: "6" },
    { name: "Ex. 5", key: "7" },
    { name: "Ex. 6", key: "8" },
    { name: "Ex. 7", key: "9" },
    { name: "Ex. 8", key: "10" }
  ]);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}> My Groups </Text>
      <FlatList
        style={styles.container2}
        data={dif_groups}
        renderItem={({ item }) => (
          <View style={styles.container3}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Folders")}
            >
              <Text style={styles.buttontext}> {item.name} </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};
export default Groups;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "orange"
  },
  container2: {
    backgroundColor: "cyan",
    width: "80%",
    flex: 1
  },
  container3: {
    //justifyContent: 'center',
    //alignContent: 'center',
    backgroundColor: "orange"
  },
  button: {
    width: "100%",
    height: 70,
    backgroundColor: "#31e89e",
    paddingVertical: 10,
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderRadius: 10,
    alignContent: "center",
    justifyContent: "center",
    marginTop: 25
  },
  buttontext: {
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    textTransform: "uppercase"
  }
});
