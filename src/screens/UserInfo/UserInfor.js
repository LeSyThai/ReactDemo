import React, {useState} from "react";
import {View, Text, StyleSheet,Image, TouchableOpacity, Dimensions, StatusBar, FlatList, PermissionsAndroid} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { launchCamera } from "react-native-image-picker";
// import BottomSheet from 'reanimated-bottom-sheet';
// import Animated from "react-native-reanimated";

const screen = Dimensions.get('screen');

export default function UserInfor(){
    const navigation = useNavigation()
    const user= useSelector((state)=> state.user)
    const fName= user.user?.[0]?.fName ?? 'min';
    const lName= user.user?.[0]?.lName ?? 'Ad'
    const [image, setImage] = useState('');

    // bs= React.createRef();
    //fall= new Animated.Value(1);

    // const requestCameraPermission = async() =>{
    //     try {
    //         const checkPermission = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);

    //         if(checkPermission === PermissionsAndroid.RESULTS.GRANTED){
    //             // console.log('camera ready')
    //             const result= await launchCamera({mediaType: 'photo', cameraType: "front"});
    //             setImage(result.assets[0].uri);
    //         }else{
    //             console.log('camera not allow')
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // const renderInner = () =>{
    //    <Text>Hello</Text>
    // }

    // const renderHeader = () =>{
    //     <View style={styles.header}>
    //         <View style={styles.panelHeader} >
    //             <View style={styles.panelHandle}></View>
    //         </View>
    //     </View>
    // }

    return (
        <View style={styles.container}>
            {/* <BottomSheet
                ref= {this.bs}
                snapPoints={[330,0]}
                renderContent={this.renderInner}
                renderHeader={this.renderHeader}
                initialSnap={1}
                callbackNode={this.fall}
                enabledGestureInteraction={true}
            /> */}
            <LinearGradient 
                style={styles.background}
                colors={['#833ab4','#fd1d1d','#fcb045']}
                >
            </LinearGradient>
            <StatusBar style='light'/>
            <View style={styles.body}>
                <View style={styles.title}>
                    {/* {image!= '' ?  */}
                    {/* <Image style={styles.profile_image} source={ {uri: image}}/>
                    : <Image style={styles.profile_image} source={require('../assets/images/Valar,VaalmonicanHallowHymn.png')}/> 
                    } */}
                    <Image style={styles.profile_image} source={require('../../assets/images/Valar,VaalmonicanHallowHymn.png')}/> 
                    <TouchableOpacity style={{paddingVertical: 10}} onPress={() => requestCameraPermission()}>
                        <Text style={{fontSize: 15, color: 'red'}}>Change profile photo</Text>
                    </TouchableOpacity>
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
    header:{
        backgroundColor: "#FFFFFF",
        shadowColor: '#333333',
        shadowOffset: {width: -1, height: -3},
        shadowRadius: 2,
        shadowOpacity: 0.4,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    panelHeader:{
        alignItems: 'center'
    },
    panelHandle:{
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    }
});