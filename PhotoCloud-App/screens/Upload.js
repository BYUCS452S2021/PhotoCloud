import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button
} from "react-native";
import * as ImagePicker from "react-native-image-picker";

const Upload = ({ navigation }) => {
  const [photo, setPhoto] = useState({
    photo: null
  });

  const handleChoosePhoto = () => {
    const options = {
      noData: true
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        setPhoto({ photo: response });
      }
    });
  };

  const createFormData = (photo, body) => {
    const data = new FormData();

    data.append("photo", {
      name: photo.fileName,
      type: photo.type,
      uri:
        Platform.OS === "android" ? photo.uri : photo.uri.replace("file://", "")
    });

    Object.keys(body).forEach(key => {
      data.append(key, body[key]);
    });

    return data;
  };

  const handleUploadPhoto = () => {
    fetch("http://localhost:3000/api/upload", {
      method: "POST",
      body: createFormData(this.state.photo, { userId: "123" })
    })
      .then(response => response.json())
      .then(response => {
        console.log("upload succes", response);
        alert("Upload success!");
        this.setState({ photo: null });
      })
      .catch(error => {
        console.log("upload error", error);
        alert("Upload failed!");
      });
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {photo && (
        <React.Fragment>
          <Image
            source={{ uri: photo.uri }}
            style={{ width: 300, height: 300 }}
          />
          <Button title="Upload" onPress={handleUploadPhoto} />
        </React.Fragment>
      )}
      <Button title="Choose Photo" onPress={handleChoosePhoto} />
    </View>
  );
};
export default Upload;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange"
  },
  button_container: {
    width: "100%",
    flexDirection: "row",
    paddingBottom: 30,
    paddingTop: 30,
    backgroundColor: "#31e89e",
    justifyContent: "center"
  },
  buttontext: {
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    textTransform: "uppercase"
  }
});
