import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'


const Upload = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text> Upload Screen </Text>
            <TouchableOpacity
                style = {styles.button}
                onPress = {() => navigation.navigate("Home")}>
                <Text style={styles.buttontext}>Upload Media</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Upload;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
    },
    button_container: {
        width: '100%',
        flexDirection: 'row',
        paddingBottom: 30,
        paddingTop: 30,
        backgroundColor: 'orange',
        justifyContent: 'center'
    },
    buttontext: {
        alignSelf: "center",
        fontSize: 18,
        fontWeight: "bold",
        color: "black",
        textTransform: "uppercase",
    },
})