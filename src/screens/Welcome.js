import React,{ useCallback, useEffect, useMemo, useState }  from "react";
import { View, Image, Text, StyleSheet, FlatList, TouchableOpacity, Button, SafeAreaView} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign'
import {useIsFocused, useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../store/userAction";
import TodoItem from "../components/TodoItem";
import { deleteTodoAction, getTodoByIdAction, getTodosAction } from "../store/todoAction";
import AwesomeAlert from "react-native-awesome-alerts";
import DrawerSceneWrapper from "../components/DrawerSceneWrappers";

const screen = Dimensions.get('screen');

const Welcome = ({navigation}) => {
    const {openDrawer}= navigation;
    const dispatch= useDispatch();
    const [showAlert, setShowAlert] = useState(false);
    const [deletingTodoId, setDeletingTodoId] = useState(null);
    const isFocused = useIsFocused();

    const user= useSelector((state) => state.user)
    const todos= useSelector((state) => state.todo)
    
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


    const pressHandler = (id) =>{
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

        <DrawerSceneWrapper>
            <SafeAreaView style={styles.container}>
                <LinearGradient 
                    style={styles.background}
                    colors={['#35667f','#2c617a','#294157']}
                    >
                </LinearGradient>
                <View style={styles.wrapper}>
                    <View style={styles.searchBar}>
                        <TouchableOpacity onPress={openDrawer}>
                        <Icon name="menu" size={20} color="#666" />
                        </TouchableOpacity>
                        <Text style={styles.searchTextPlaceHolder}>Search Here</Text>
                    </View>
                    <View style={styles.header}>
                        <Text style={{color:'white'}}>Welcome to Home Screen, {userName}</Text>
                        <Button title="Logout" onPress={handleLogout} />
                    </View>
                </View>
                <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 30, color: 'white'}}>To do List</Text>
            </View>
            <View style={styles.list}>
                <FlatList
                    style={styles.flatList}
                    data={listTodo}
                    // refreshing= {onload}
                    renderItem={({item}) => (
                        <TodoItem item={item} pressHandler ={pressHandler} pressBtnHandler={() => {
                            setShowAlert(true),
                            setDeletingTodoId(item.id)
                        }}
                        />
                    )}
                    keyExtractor={(item, index) => String(index)}
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

            </SafeAreaView>
        </DrawerSceneWrapper>
    );
}
export default Welcome;

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
    wrapper: {padding: 16},
    searchBar: {
        backgroundColor: '#fff',
        borderRadius: 50,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        shadowOffset: {
        width: 0,
        height: 5,
        },
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        marginBottom: 12,
    },
    searchTextPlaceHolder: {
        color: '#666',
        marginLeft: 8,
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