import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native'


const Login = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Button
                title="Login" 
                onPress={() => navigation.navigate("Home")}/>
            <Button 
                title="Create New Acount"
                onPress={() => navigation.navigate("Register")}/>
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