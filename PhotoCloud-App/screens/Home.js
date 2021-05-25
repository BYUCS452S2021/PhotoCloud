import React from 'react';
import {View, Text, StyleSheet} from 'react-native'


const Home = (props) => {
    return (
        <View style={StyleSheet.container}>
            <Text>Home</Text>
        </View>
    )
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})