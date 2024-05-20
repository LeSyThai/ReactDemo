import React from "react";
import { View, Image, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity, Button, SafeAreaView} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useIsFocused, useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../store/userAction";
import DrawerSceneWrapper from "../components/DrawerSceneWrappers";

const screen = Dimensions.get('screen');

const Welcome = ({navigation}) => {
    const {openDrawer}= navigation;
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

        <DrawerSceneWrapper>
            <SafeAreaView style={styles.container}>
                <LinearGradient 
                    style={styles.background}
                    colors={['#35667f','#2c617a','#294157']}
                    >
                </LinearGradient>
                <View style={styles.wrapper}>
                    <View style={styles.searchBar}>
                        <TouchableOpacity onPress={openDrawer}>
                        <Icon name="menu" size={20} color="#666" />
                        </TouchableOpacity>
                        <Text style={styles.searchTextPlaceHolder}>Search Here</Text>
                    </View>
                    <View style={styles.header}>
                        <Text style={{color:'white'}}>Welcome to Home Screen, {userName}</Text>
                        <Button title="Logout" onPress={handleLogout} />
                    </View>
                </View>
            </SafeAreaView>
        </DrawerSceneWrapper>
    );
}
export default Welcome;

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
    wrapper: {padding: 16},
    searchBar: {
        backgroundColor: '#fff',
        borderRadius: 50,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        shadowOffset: {
        width: 0,
        height: 5,
        },
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        marginBottom: 12,
    },
    searchTextPlaceHolder: {
        color: '#666',
        marginLeft: 8,
    },
    
    
});