import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import LinearGradient from 'react-native-linear-gradient';
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { useSelector } from "react-redux";

const screen= Dimensions.get('screen');

const CustomDrawer = (props) =>{

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
            <View style={styles.header}>
                <Image style={styles.header_image} source={require('../assets/images/upnow.png')}/>
                <TouchableOpacity>
                    <Entypo name="cross" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <View style={styles.profile}>
                    <Image style={styles.profile_image} source={require('../assets/images/Valar,VaalmonicanHallowHymn.png')}/>
                    <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white', marginTop: 10}}>
                        {userName}
                    </Text>
                </View>
            </View>
            <DrawerContentScrollView {...props} contentContainerStyle>
                <DrawerItemList {...props}/>
            </DrawerContentScrollView>
            <View style={{bottom: 20, flexDirection: 'row', marginHorizontal: 20}}>
                <Text style={{color: 'white'}}>Powered by </Text>
                <Text style={{color: 'white', fontWeight: 'bold'}}>UpNow</Text>
            </View>

        </View>
    )
}
export default CustomDrawer;

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
        paddingVertical: 15,
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
});