import React from 'react';
import {TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {View, Text, StyleSheet} from 'react-native'


const Home = () => {
    return (
        <View style={styles.container}>
            <Text>This is where Home is</Text>
        </View>
    )
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'orange',
    }
})

/*
     <SafeAreaView style={styles.container}>
      <View style={{ // These aare density independent pixels (DIPS), Physical pixels = DIPS x Scale Factor
        backgroundColor : 'dodgerblue',
        width: '100%',
        height: landscape ? '100%' : '30%', // If landscape 100%, else 30%
      }}></View>
*/
