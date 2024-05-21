import 'react-native-gesture-handler';
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import { useSelector } from 'react-redux';
import DrawerNavigator from './drawer';
import { Settings } from 'react-native';
import UserInfor from '../screens/UserInfor';
import AddTodo from '../screens/AddTodo';
import UpdateTodo from '../screens/UpdateTodo';

const Stack = createNativeStackNavigator();

function Home(){
    return(
        <DrawerNavigator/>
    );
}

export default function AppNavigation(){
    const user= useSelector((state) => state?.user);
    console.log(user,'<<');
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
                            title: "User info",
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
                            title: "Add Todo",
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
                            title: "Update Todo",
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