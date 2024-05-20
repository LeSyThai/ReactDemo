import React, {useState} from "react";
import {View, Text, StyleSheet,Image, TouchableOpacity, Dimensions, StatusBar, FlatList} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const screen = Dimensions.get('screen');

export default function Menu(){
    const navigation = useNavigation();

    const user= useSelector((state) => state.user);
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
                <Image style={styles.header_image} source={require('../assets/images/upnow.png')}/>
                <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
                    <Entypo name="cross" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <View style={styles.profile}>
                    <Image style={styles.profile_image} source={require('../assets/images/Valar,VaalmonicanHallowHymn.png')}/>
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white', marginVertical: 10}}>
                        {userName}
                    </Text>
                </View>
                <View style={styles.menuList}>
                    <TouchableOpacity style={[styles.item, styles.item_selected]}>
                        <Ionicons style={styles.item_icon} name="home-outline" size={18} color="red" />
                        <Text style={{color: 'white'}}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item}>
                        <Octicons style={styles.item_icon} name="bell" size={18} color="white" />
                        <Text style={{color: '#777899'}}>Reminder</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item}>
                    <MaterialCommunityIcons style={styles.item_icon} name="account" size={18} color="white" />
                        <Text style={{color: '#777899'}}>Invite your friend</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item}>
                        <Feather style={styles.item_icon} name="mail" size={18} color="white" />
                        <Text style={{color: '#777899'}}>Send a testimonial</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item}>
                        <Octicons style={styles.item_icon} name="video" size={18} color="white" />
                        <Text style={{color: '#777899'}}>Welcome video</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={()=> navigation.navigate('Rewards')}>
                        <Entypo style={styles.item_icon} name="trophy" size={18} color="white" />
                        <Text style={{color: '#777899'}}>Rewards</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item}>
                        <Ionicons style={styles.item_icon} name="help-circle-outline" size={18} color="white" />
                        <Text style={{color: '#777899'}}>Helps & Support</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("Settings")}>
                        <AntDesign style={styles.item_icon} name="setting" size={18} color="white" />
                        <Text style={{color: '#777899'}}>Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item}>
                        <AntDesign style={styles.item_icon} name="warning" size={18} color="white" />
                        <Text style={{color: '#777899'}}>Disclaimer</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{bottom: 0, flexDirection: 'row', marginHorizontal: 20}}>
                <Text style={{color: 'white'}}>Powered by </Text>
                <Text style={{color: 'white', fontWeight: 'bold'}}>UpNow</Text>
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
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
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
    profile_image:{
        width: 70,
        height: 70,
        borderRadius: 50,
        marginRight: 50,
        borderColor: '#9e9595',
        borderWidth: 3
    },
    menuList:{
        marginVertical: 10
    },
    item:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
    },
    item_selected:{
        backgroundColor: '#0f2c4f',
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
    },
    item_icon:{
        paddingHorizontal:20,
    },
});