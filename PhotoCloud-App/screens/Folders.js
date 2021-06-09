import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Button
} from "react-native";

const Folders = ({ navigation }) => {
  const [dif_groups, setGroups] = useState([
    { name: "Lake Powell", key: "1" },
    { name: "Cousin's Wedding", key: "2" }
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
              onPress={() => console.log("Go to", item.name, "images")}
            >
              <Text style={styles.buttontext}> {item.name} </Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default Folders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "orange"
  },
  container2: {
    backgroundColor: "orange",
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
