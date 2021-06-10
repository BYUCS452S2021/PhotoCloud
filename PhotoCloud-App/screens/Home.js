import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  Modal,
  Pressable,
  TextInput
} from "react-native";

const Home = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Group has been created successfully.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Think of a funny name...</Text>
              <TextInput style={styles.input} placeholder="Group Name" />
              <TextInput style={styles.input} placeholder="Description" />
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Add Group</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Create Group</Text>
      </Pressable>
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 0,
      backgroundColor: "orange"
    },
    modalView: {
      margin: 20,
      backgroundColor: "orange",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "orange",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "cyan"
    },
    buttonClose: {
      backgroundColor: "cyan"
    },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  input: {
    height: 40,
    width: "60%",
    margin: 10,
    paddingLeft: 5,
    paddingRight: 70,
    borderWidth: 1,
    borderRadius: 5,
    textAlign: "right"
  }
});

  