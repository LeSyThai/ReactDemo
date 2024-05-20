import React from "react";
import { Platform, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Welcome from "../screens/Welcome";
import Rewards from "../screens/Rewards";
import Settings from "../screens/Settings";
import CustomDrawer from "../components/CustomDrawer";
import Reminder from "../screens/Reminder";
import Invite from "../screens/Invite";
import Send from "../screens/Send";
import Video from "../screens/Video";
import Help from "../screens/Help";
import Disclaimer from "../screens/Disclaimer";

const Drawer= createDrawerNavigator();

const DrawerNavigator= ()=>{
    const drawerIcon= ({focused, size}, name) => {
        return (
            <Icon
                name= {name}
                size= {size}
                color={focused ? Colors.active : Colors. inactive}
            />

        );
    }

    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            drawerType='slide'
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: Colors.transparent,
                drawerInactiveBackgroundColor: Colors.transparent,
                drawerActiveTintColor: Colors.active,
                drawerInactiveTintColor: Colors.inactive,
                drawerHideStatusBarOnOpen: Platform.OS === 'ios' ? true : false,
                overlayColor: Colors.transparent,
                drawerStyle: {
                  backgroundColor: '#353847',
                  width: '60%',
                },
                sceneContainerStyle: {
                  backgroundColor: '#353847',
                },
            }}
        >
            <Drawer.Screen
                name="Welcome"
                component={Welcome}
                options={{
                    drawerIcon: options => drawerIcon(options, 'home-outline'),
                }}
            />
            <Drawer.Screen
                name="Remider"
                component={Reminder}
                options={{
                    drawerIcon: options => drawerIcon(options, 'bell-outline'),
                }}
            />
            <Drawer.Screen
                name="Invite your friends"
                component={Invite}
                options={{
                    drawerIcon: options => drawerIcon(options, 'account-circle-outline'),
                }}
            />
            <Drawer.Screen
                name="Send a testimanial"
                component={Send}
                options={{
                    drawerIcon: options => drawerIcon(options, 'email-outline'),
                }}
            />
            <Drawer.Screen
                name="Welcome video"
                component={Video}
                options={{
                    drawerIcon: options => drawerIcon(options, 'youtube-tv'),
                }}
            />
            <Drawer.Screen
                name="Rewards"
                component={Rewards}
                options={{
                    drawerIcon: options => drawerIcon(options, 'trophy-outline'),
                }}
            />
            <Drawer.Screen
                name="Help & Support"
                component={Help}
                options={{
                    drawerIcon: options => drawerIcon(options, 'help-circle-outline'),
                }}
            />
            <Drawer.Screen
                name="Settings"
                component={Settings}
                options={{
                    drawerIcon: options => drawerIcon(options, 'cog-outline'),
                }}
            />
            <Drawer.Screen
                name="Disclaimer"
                component={Disclaimer}
                options={{
                    drawerIcon: options => drawerIcon(options, 'alert-outline'),
                }}
            />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;

const Colors = {
  bg: '#009688',
  active: '#fff',
  inactive: '#eee',
  transparent: 'transparent',
};
