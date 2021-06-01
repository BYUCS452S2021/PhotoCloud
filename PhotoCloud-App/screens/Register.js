import React from 'react';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, StatusBar, Dimensions} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const window = Dimensions.get('window');
const IMAGE_HEIGHT = window.width / 2;

const Register = ({navigation}) => {
    return (
        <KeyboardAvoidingView
         style={styles.container1}
         behavior='height'>
            <StatusBar
            backgroundColor='orange'
            barStyle='light-content'/>
            <View
             style={styles.container2}>
                 <View style={styles.container3}>
                    <View style={{flex:1, backgroundColor: 'orange'}}>
                        <Ionicons style={{paddingLeft: 10}} name='arrow-back' size={30} color='black' onPress = {() => navigation.navigate("Login")}/>
                    </View>
                    <Image source={require('../assets/logo1.png')} style={styles.logo}/>
                    <View style={{flex:1, backgroundColor:'orange'}}/>
                 </View>
                <Text style={{fontSize:22, fontWeight: 'bold', paddingBottom: 10, alignContent: 'center', justifyContent: 'center'}}> Create your PhotoCloud Account</Text>
                <Text style={{paddingBottom: 30, padding:30, alignContent: 'center', justifyContent: 'center'}}> Share content with your friends and family as soon as you create a free account! </Text>
                <TextInput style={styles.input} placeholder="Email Address"/>
                <TextInput style={styles.input} placeholder="First Name"/>
                <TextInput style={styles.input} placeholder="Last Name"/>
                <TextInput style={styles.input} placeholder="Username"/>
                <TextInput style={styles.input} placeholder="Password"/>

                <TouchableOpacity
                        style = {styles.button}
                        onPress = {() => navigation.navigate("Login")}>
                        <Text style={styles.buttontext}>Register</Text>
                </TouchableOpacity>
            </View>
            <View style={{padding: 20, width:'100%', backgroundColor:'orange'}}/>
        </KeyboardAvoidingView>
    )
}
export default Register;

const styles = StyleSheet.create({
    button: {
        width:'30%',
        //marginTop:20,
        backgroundColor: "#31e89e",
        paddingVertical: 10,
        paddingHorizontal: 10,
        paddingBottom: 10,
        borderRadius: 10,
        marginTop:10,
    },
    buttontext: {
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        textTransform: 'uppercase'
    },
    container3: {
        flexDirection: 'row',
        backgroundColor:'orange',  
        width:'100%',
        height: '20%',
        justifyContent:'center',
        alignContent: 'center'
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
        flex: 1,
        resizeMode: 'contain',
        //width: '100%',
        height: '100%',
        padding:5,
        marginTop:10,
        backgroundColor: 'orange',
        alignContent: 'center',
        justifyContent: 'center',
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
