import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login/Login';
import Signup from '../screens/Signup/Signup';
import { useSelector } from 'react-redux';
import UserInfor from '../screens/UserInfo/UserInfor';
import AddTodo from '../screens/AddTodo/AddTodo';
import UpdateTodo from '../screens/UpdateTodo/UpdateTodo';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerNavigator from './drawer';
import { useTranslation } from 'react-i18next';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Home(){
    return (
        <DrawerNavigator/>
    )
}

export default function AppNavigation(){
    const {t} = useTranslation();
    const user= useSelector((state) => state?.user);
    //console.log(user,'<<');
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
                {!user.isSignedIn? (
                <>
                    <Stack.Screen
                        name='Login'
                        component={Login}
                    />
                    <Stack.Screen
                        name='Signup'
                        component={Signup}
                    />
                </>
                ):(
                    <>
                    <Stack.Screen
                        name='HomeScreen'
                        component={Home}
                    />
                    {/* <Stack.Screen
                        name='AddTodo'
                        component={AddTodo}
                    />
                    <Stack.Screen
                        name='HomeScreen'
                        component={Home}
                    /> */}
                    <Stack.Screen
                        name="UserInfor"
                        component={UserInfor}
                        options={{
                            headerShown: true,
                            headerStyle:{
                                backgroundColor: '#2b356d'
                            },
                            headerTintColor: 'white',
                            title: t('User Info'),
                            headerTitleAlign: 'center',
                            headerBackTitle: 'Back'
                        }}
                    />
                    <Stack.Screen
                        name= 'AddTodo'
                        component={AddTodo}
                        options={{
                            headerShown: true,
                            headerStyle:{
                                backgroundColor: '#2b356d'
                            },
                            headerTintColor: 'white',
                            title: t('Add New Todo'),
                            headerTitleAlign: 'center',
                            headerBackTitle: 'Back'
                        }}
                    />
                    <Stack.Screen
                        name= 'UpdateTodo'
                        component={UpdateTodo}
                        options={{
                            headerShown: true,
                            headerStyle:{
                                backgroundColor: '#2b356d'
                            },
                            headerTintColor: 'white',
                            title: t('Update Todo'),
                            headerTitleAlign: 'center',
                            headerBackTitle: 'Back'
                        }}
                    />
                </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}