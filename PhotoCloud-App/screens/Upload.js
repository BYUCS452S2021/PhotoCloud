import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native'


const Upload = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text> Upload Screen </Text>
        </View>
    )
}
export default Upload;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})