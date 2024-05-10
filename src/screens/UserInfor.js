import React, {useState} from "react";
import {View, Text, StyleSheet,Image, TouchableOpacity, Dimensions, StatusBar, FlatList} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const screen = Dimensions.get('screen');

export default function UserInfor(){
    const navigation = useNavigation()
    const user= useSelector((state)=> state.user)
    const fName= user.user?.[0]?.fName ?? 'min';
    const lName= user.user?.[0]?.lName ?? 'Ad'

    return (
        <View style={styles.container}>
            <LinearGradient 
                style={styles.background}
                colors={['#833ab4','#fd1d1d','#fcb045']}
                >
            </LinearGradient>
            <StatusBar style='light'/>
            <View style={styles.body}>
                <View style={styles.title}>
                    <Image style={styles.profile_image} source={require('../assets/images/Valar,VaalmonicanHallowHymn.png')}/>
                    <Text style={{fontSize: 15, color: 'red', paddingVertical: 10}}>
                        Change profile photo
                    </Text>
                </View>
                <View style={styles.menuList}>
                    <View style={styles.item}>
                        <Text style={{color: 'white', flex: 1}}>First Name</Text>
                        <Text style={{color: 'white', flex: 2}}>{fName}</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={{color: 'white', flex: 1}}>Last Name</Text>
                        <Text style={{color: 'white', flex: 2}}>{lName}</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={{color: 'white', flex: 1}}>Email</Text>
                        <Text style={{color: 'white', flex: 2}}>{user.user[0].email}</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={{color: 'white', flex: 1}}>Password</Text>
                        <Text style={{color: 'white', flex: 2}}>{'*'.repeat(user.user[0].password.length)}</Text>
                    </View>
                </View>
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
        backgroundColor: '#15345c',
        
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 1000,
        opacity: 0.2,
    },
    body:{
        paddingVertical: 35,
        // paddingHorizontal: 35,
    },
    profile_image:{
        width: 90,
        height: 90,
        borderRadius: 50,
        borderColor: '#9e9595',
        borderWidth: 3
    },
    title:{
        flexDirection: 'column',
        alignItems: 'center'
    },
    menuList:{
        marginVertical: 10
    },
    item:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#2a3a70',
        marginVertical: 5,
    },
    
});