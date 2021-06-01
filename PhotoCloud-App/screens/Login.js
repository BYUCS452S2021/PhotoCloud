import React from 'react';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, StatusBar, Dimensions} from 'react-native';

const window = Dimensions.get('window');
const IMAGE_HEIGHT = window.width / 2;

const Login = ({navigation}) => {
    return (
        <KeyboardAvoidingView
         style={styles.container1}
         behavior='height'>
            <StatusBar
            backgroundColor='orange'
            barStyle='light-content'/>
            <View
             style={styles.container2}>
                <Image source={require('../assets/logo1.png')} style={styles.logo}/>
                <Text style={{fontSize:22, fontWeight: 'bold', paddingBottom: 10}}> Welcome Back</Text>
                <Text style={{paddingBottom: 30}}> Use your credentials to log into your account </Text>
                <TextInput style={styles.input} placeholder="i.e. ElonMusk420"/>
                <TextInput style={styles.input} placeholder="i.e. dogetothemoon" secureTextEntry/>
                <View style={styles.button_container}>
                    <TouchableOpacity
                        style = {styles.button}
                        onPress={() => navigation.navigate("Register")}>
                        <Text style={styles.buttontext}>Register</Text>
                    </TouchableOpacity>
                    <View style={{padding:5}}/>
                    <TouchableOpacity
                        style = {styles.button}
                        onPress = {() => navigation.navigate("Home")}>
                        <Text style={styles.buttontext}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{padding: 40, width:'100%', backgroundColor:'orange'}}/>
        </KeyboardAvoidingView>
    )
}
export default Login;

const styles = StyleSheet.create({
    button: {
        width:'30%',
        //marginTop:20,
        backgroundColor: "#31e89e",
        paddingVertical: 10,
        paddingHorizontal: 10,
        paddingBottom: 10,
        borderRadius: 10,
    },
    buttontext: {
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        textTransform: 'uppercase'
    },
    input: {
        height: 40,
        width: '50%',
        margin: 10,
        paddingLeft: 10,
        borderWidth: 1,
        borderRadius:5,
    },
    logo: {
        // flex: 1,
        resizeMode: 'contain',
        width: '80%',
        height: IMAGE_HEIGHT,
        padding:5,
        marginTop:10,
        backgroundColor: 'orange',
        alignContent: 'flex-start',
    },
    button_container: {
        width: '100%',
        flexDirection: 'row',
        paddingBottom: 30,
        paddingTop: 30,
        backgroundColor: 'orange',
        justifyContent: 'center'
    },
    container2: {
        flex:1,
        width: '100%',
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    container1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

//
