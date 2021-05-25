import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native'


const Register = ({navigation}) => {
    return (
        <View style={styles.container}>
            {/* <Button
                title="Login" 
                onPress={() => navigation.navigate("Home")}/> */}
        </View>
    )
}
export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})