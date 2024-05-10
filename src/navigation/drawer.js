import React from "react";
import { Platform } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Welcome from "../screens/Welcome";
import Rewards from "../screens/Rewards";
import Settings from "../screens/Settings";

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
                  backgroundColor: Colors.bg,
                  width: '60%',
                },
                sceneContainerStyle: {
                  backgroundColor: Colors.bg,
                },
            }}
        >
            <Drawer.Screen
                name="Home"
                component={Welcome}
                options={{
                    drawerIcon: options => drawerIcon(options, 'home-outline'),
                }}
            />
            {/* <Drawer.Screen
                name="Remider"
                //component={Welcome}
                options={{
                    drawerIcon: options => drawerIcon(options, 'bell-outline'),
                }}
            />
            <Drawer.Screen
                name="Invite your friends"
                //component={Welcome}
                options={{
                    drawerIcon: options => drawerIcon(options, 'account-circle-outline'),
                }}
            />
            <Drawer.Screen
                name="Send a testimanial"
                //component={Welcome}
                options={{
                    drawerIcon: options => drawerIcon(options, 'email-outline'),
                }}
            />
            <Drawer.Screen
                name="Welcome video"
                //component={Welcome}
                options={{
                    drawerIcon: options => drawerIcon(options, 'youtube-tv'),
                }}
            /> */}
            <Drawer.Screen
                name="Rewards"
                component={Rewards}
                options={{
                    drawerIcon: options => drawerIcon(options, 'trophy-outline'),
                }}
            />
            {/* <Drawer.Screen
                name="Help & Support"
                //component={Welcome}
                options={{
                    drawerIcon: options => drawerIcon(options, 'help-circle-outline'),
                }}
            /> */}
            <Drawer.Screen
                name="Settings"
                component={Settings}
                options={{
                    drawerIcon: options => drawerIcon(options, 'cog-outline'),
                }}
            />
            {/* <Drawer.Screen
                name="Disclaimer"
                //component={Welcome}
                options={{
                    drawerIcon: options => drawerIcon(options, 'alert-outline'),
                }}
            /> */}
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
