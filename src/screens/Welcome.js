import React from "react";
import { View, Image, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity, Button} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../store/userAction";

const screen = Dimensions.get('screen');

export default function Welcome(){
    const navigation = useNavigation();
    const dispatch= useDispatch();

    const user= useSelector((state) => state.user)
    
    const handleLogout = () => {
        dispatch(logoutAction());
        //navigation.navigate('Login'); 
      };
        const fName= user.user?.[0]?.fName ?? 'min';
        const lName= user.user?.[0]?.lName ?? 'Ad'
        const userName= lName + ' ' + fName;

    return (
        <View style={styles.container}>
            <LinearGradient 
                style={styles.background}
                colors={['#833ab4','#fd1d1d','#fcb045']}
                >
            </LinearGradient>
            <StatusBar style='light'/>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                    <Image style={styles.header_image} source={require('../assets/images/upnow.png')}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <AntDesign style={{paddingRight: 20}} name="search1" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.header}>
                <Text style={{color:'white'}}>Welcome to Home Screen, {userName}</Text>
                <Button title="Logout" onPress={handleLogout} />
            </View>

        </View>
    );
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        // fontFamily: 'Arial',
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#266494',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 1000,
        opacity: 0.2,
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10,
        paddingTop: 10,
        height: screen.height*0.07,
    },
    header_image:{
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 25
    },
    body:{
        paddingVertical: 35,
        paddingHorizontal: 35,
    },
    textInput:{
        borderRadius: 50,
        backgroundColor: '#233f63',
        flexDirection: 'row',
        height: screen.height * 0.06,
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 15
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 50,
        elevation: 3,
        backgroundColor: '#ff4f9e',
        marginVertical: 25,
    },
    separator:{

        backgroundColor: '#324161',
        height: screen.height*0.01,
        margin: 2
    },
    fbButton:{
        flexDirection: 'row',
        alignItems:'center',
        borderRadius: 50,
        height: screen.height*0.06,
        marginVertical: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#3B5998',
    },
    apButton:{
        flexDirection: 'row',
        alignItems:'center',
        borderRadius: 50,
        height: screen.height*0.06,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#000000',
    }
    
});