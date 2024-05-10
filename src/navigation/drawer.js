import React from "react";
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useSelector } from "react-redux";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    const drawerIcon = ({focused, size}, name) => {
        return (
            <Icon
                name={name}
                size={size}
                color= {focused? Colors.active : Colors.inactive}
            />
        );
    };
    return(
        <Drawer.Navigator drawerType='slide'>
            <Drawer.Screen
                name='Home'
                component={Home}
                options={{
                    drawerIcon: options => drawerIcon(options, 'home-outline'),
                }}
            />
            <Drawer.Screen
                name='Home'
                component={Home}
                options={{
                    drawerIcon: options => drawerIcon(options, 'home-outline'),
                }}
            />
        </Drawer.Navigator>
    );
}

