import React from "react";
import { Platform, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Welcome from "../screens//Welcome/Welcome";
import Rewards from "../screens/Rewards/Rewards";
import Settings from "../screens/Settings/Settings";
import CustomDrawer from "../components/drawer_navigation/CustomDrawer";
import Reminder from "../screens/Reminder/Reminder";
import Invite from "../screens/Invite/Invite";
import Send from "../screens/Send/Send";
import Video from "../screens/Video/Video";
import Help from "../screens/Help/Help";
import Disclaimer from "../screens/Disclaimer/Disclaimer";

const Drawer= createDrawerNavigator();

const DrawerNavigator= ()=>{
    const drawerIcon= ({focused, size}: {focused: any, size: any}, name: string) => {
        return (
            <Icon
                name= {name}
                size= {size}
                color={focused ? 'red' : Colors. inactive}
            />

        );
    }

    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            drawerType='slide'
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: '#243342',
                drawerInactiveBackgroundColor: Colors.transparent,
                drawerActiveTintColor: Colors.active,
                drawerInactiveTintColor: Colors.inactive,
                drawerHideStatusBarOnOpen: Platform.OS === 'ios' ? true : false,
                overlayColor: Colors.transparent,
                drawerItemStyle:{
                    borderBottomLeftRadius: 50,
                    borderTopLeftRadius: 50,
                    paddingLeft: 10
                },
                drawerStyle: {
                  backgroundColor: '#353847',
                  width: '65%',
                },
                sceneContainerStyle: {
                  backgroundColor: '#293b4d',
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
  active: 'white',
  inactive: 'grey',
  transparent: 'transparent',
};
