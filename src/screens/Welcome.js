import React, { useCallback, useEffect, useMemo, useState } from "react";
import { View, Image, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity, Button, FlatList} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../store/userAction";
import TodoItem from "../components/TodoItem";
import { deleteTodoAction, getTodoByIdAction, getTodosAction } from "../store/todoAction";
import AwesomeAlert from "react-native-awesome-alerts";

const screen = Dimensions.get('screen');

export default function Welcome(){
    const navigation = useNavigation();
    const dispatch= useDispatch();
    const [showAlert, setShowAlert] = useState(false);
    const [deletingTodoId, setDeletingTodoId] = useState(null);
    const isFocused = useIsFocused();

    const user= useSelector((state) => state.user)
    const todos= useSelector((state) => state.todo)

    //dispatch(getTodosAction(user.user[0].id));
    const onload = async()=>{
        await dispatch(getTodosAction(user.user[0].id));
    }

    useEffect(()=>{
        if(isFocused)
        onload();
    }, [dispatch, user.user, isFocused]);

    const listTodo= useMemo(() => {
        return todos.todos;
    }, [todos.todos])


    //console.log(todos);

    const pressHandler = (id) =>{
        // const todo= useCallback(() =>{
        //     dispatch(getTodoByIdAction(id));
        // })
        navigation.navigate('UpdateTodo', {id})
    }

    const handleConfirmDelete = async() => {
        await dispatch(deleteTodoAction(deletingTodoId));
        setShowAlert(false);
      };
    
    const handleLogout = () => {
        dispatch(logoutAction());
        //navigation.navigate('Login'); 
      };
        const fName= user.user?.[0]?.fName ?? 'min';
        const lName= user.user?.[0]?.lName ?? 'Ad'
        const userName= lName + ' ' + fName;

    return (
        <View style={styles.container}>
            <LinearGradient 
                style={styles.background}
                colors={['#833ab4','#fd1d1d','#fcb045']}
                >{onload}
            </LinearGradient>
            <StatusBar style='light'/>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                    <Image style={styles.header_image} source={require('../assets/images/upnow.png')}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <AntDesign style={{paddingRight: 20}} name="search1" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.header}>
                <Text style={{color:'white'}}>Welcome to Home Screen, {userName}</Text>
                <Button title="Logout" onPress={handleLogout} />
            </View>
            <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 30, color: 'white'}}>To do List</Text>
            </View>
            <View style={styles.list}>
                <FlatList
                    style={styles.flatList}
                    data={listTodo}
                    renderItem={({item}) => (
                        <TodoItem item={item} pressHandler ={pressHandler} pressBtnHandler={() => {
                            setShowAlert(true),
                            setDeletingTodoId(item.id)
                        }}
                        />
                    )}
                />
            </View>
            <View style={styles.addBtn}>
                <TouchableOpacity onPress={() => navigation.navigate('AddTodo')}>
                    <AntDesign name='pluscircle' size={50} color='white'/>
                </TouchableOpacity>
            </View>
            
            <AwesomeAlert
                show={showAlert}  
                title='Delete Todo' 
                titleStyle={{fontSize: 28, color: 'red'}}

                message='Are you want to delete this todo ?'
                messageStyle={{color: 'black', fontSize: 22}}

                showCancelButton={true}
                cancelText='Cancel'
                cancelButtonColor='blue'
                onCancelPressed={()=>{
                setShowAlert(false),
                setDeletingTodoId(null)
                }}

                showConfirmButton={true}
                confirmText='Delete'
                confirmButtonColor="#DD6B55"
                onConfirmPressed={() => {
                handleConfirmDelete(deletingTodoId)
                }}

                // showProgress ={true}
                // progressColor='red'
                // progressSize={40}
            />

        </View>
    );
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        // fontFamily: 'Arial',
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#266494',
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
        paddingLeft: 10,
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
    textInput:{
        borderRadius: 50,
        backgroundColor: '#233f63',
        flexDirection: 'row',
        height: screen.height * 0.06,
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 15
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 50,
        elevation: 3,
        backgroundColor: '#ff4f9e',
        marginVertical: 25,
    },
    list:{
      marginTop: 20,
    },
    addBtn:{
        position: 'absolute',
        bottom: 15,
        right: 15
    },
    flatList:{
        height: screen.height * 0.7
    }
    
});