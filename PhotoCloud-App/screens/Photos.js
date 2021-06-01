import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native'


const Photos = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text> Upload Screen </Text>
        </View>
    )
}
export default Photos;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
    }
})