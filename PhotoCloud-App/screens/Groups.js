import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native'


const Groups = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text> Display Groups Here</Text>
            {/* <Button
                title="Login" 
                onPress={() => navigation.navigate("Home")}/> */}
        </View>
    )
}
export default Groups;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})