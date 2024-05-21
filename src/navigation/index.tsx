import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login';
import { Screen } from 'react-native-screens';
import Signup from '../screens/Signup';
import { useSelector } from 'react-redux';
import Welcome from '../screens/Welcome';
import Menu from '../screens/Menu';
import Rewards from '../screens/Rewards';
import Settings from '../screens/Settings';
import UserInfor from '../screens/UserInfor';
<<<<<<< HEAD
import { createDrawerNavigator } from '@react-navigation/drawer';
=======
>>>>>>> feature/thails
import AddTodo from '../screens/AddTodo';
import UpdateTodo from '../screens/UpdateTodo';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function AppNavigation(){
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
<<<<<<< HEAD
                    name="Welcome"
                    component={Welcome}
                />
                <Stack.Screen
                    name="Menu"
                    component={Menu}
                />
                <Stack.Screen
                    name="Rewards"
                    component={Rewards}
                />
                <Stack.Screen
                    name="Settings"
                    component={Settings}
                    options={{
                        headerShown: true,
                        headerStyle:{
                            backgroundColor: '#15345c'
                        },
                        headerTintColor: 'white',
                        title: "Settings",
                        headerTitleAlign: 'center',
                        headerBackTitle: 'Back'
                    }}
                />
                <Stack.Screen
                    name="UserInfor"
                    component={UserInfor}
                    options={{
                        headerShown: true,
                        headerStyle:{
                            backgroundColor: '#15345c'
                        },
                        headerTintColor: 'white',
                        title: "User info",
                        headerTitleAlign: 'center',
                        headerBackTitle: 'Back'
                    }}
                />
                <Stack.Screen
                    name="AddTodo"
                    component={AddTodo}
                    options={{
                        headerShown: true,
                        headerStyle:{
                            backgroundColor: '#15345c'
                        },
                        headerTintColor: 'white',
                        title: "Add Todo",
                        headerTitleAlign: 'center',
                        headerBackTitle: 'Back'
                    }}
                />
                <Stack.Screen
                    name="UpdateTodo"
                    component={UpdateTodo}
                    options={{
                        headerShown: true,
                        headerStyle:{
                            backgroundColor: '#15345c'
                        },
                        headerTintColor: 'white',
                        title: "Update Todo",
                        headerTitleAlign: 'center',
                        headerBackTitle: 'Back'
                    }}
                />
                    </>
=======
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
>>>>>>> feature/thails
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}