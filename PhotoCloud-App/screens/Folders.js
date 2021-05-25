import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native'


const Folders = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text> Display Folders Here</Text>
            {/* <Button
                title="Fol" 
                onPress={() => navigation.navigate("Home")}/> */}
        </View>
    )
}
export default Folders;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})