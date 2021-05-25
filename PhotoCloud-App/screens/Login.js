import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native'


const Login = ({navigation}) => {
    return (
        <View style={StyleSheet.container}>
            <Button
                title="Login" 
                onPress={() => navigation.navigate("Home")}/>
        </View>
    )
}
export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})