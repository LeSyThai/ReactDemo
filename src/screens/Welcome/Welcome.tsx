import React,{ useEffect, useMemo, useState }  from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button, SafeAreaView} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign'
import {useIsFocused, useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../store/userAction";
import TodoItem from "../../components/todo_list/TodoItem";
import { deleteTodoAction, getTodoByIdAction, getTodosAction } from "../../store/todoAction";
import AwesomeAlert from "react-native-awesome-alerts";
import DrawerSceneWrapper from "../../components/drawer_navigation/DrawerSceneWrappers";
import { useTranslation } from "react-i18next";

const screen = Dimensions.get('screen');

const Welcome = ({navigation}) => {
    const {t} = useTranslation();
    const {openDrawer}= navigation;
    const dispatch= useDispatch();
    const [showAlert, setShowAlert] = useState(false);
    const [deletingTodoId, setDeletingTodoId] = useState(null);
    const isFocused = useIsFocused();

    const user= useSelector((state: any) => state.user)
    const todos= useSelector((state: any) => state.todo)
    
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


    const pressHandler = (id: any) =>{
        navigation.navigate('UpdateTodo', {id})
    }

    const handleConfirmDelete = async(deletingTodoId: null) => {
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
                <View style={styles.header}>
                    <Text style={styles.white}>{t('Welcome to Home Screen, ')}{userName}</Text>
                    <Button title={t('Log out')} onPress={handleLogout} />
                </View>
                <View style={styles.wrapper}>
                    <View style={styles.searchBar}>
                        <TouchableOpacity onPress={openDrawer}>
                        <Icon name="menu" size={20} color="#666" />
                        </TouchableOpacity>
                        <Text style={styles.searchTextPlaceHolder}>{t('Search Here')}</Text>
                    </View>
                </View>
                <View style={styles.center}>
                <Text style={styles.bodyText}>{t('Todo List')}</Text>
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
                title={t('Delete Todo')} 
                titleStyle={styles.alertTitle}
                
                message={t('Are you want to delete this todo ?')}
                messageStyle={styles.alertMessage}
                
                showCancelButton={true}
                cancelText={t('Cancel')}
                cancelButtonColor='blue'
                onCancelPressed={()=>{
                    setShowAlert(false),
                    setDeletingTodoId(null)
                }}
                
                showConfirmButton={true}
                confirmText={t('Delete')}
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
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 20,
        paddingHorizontal: 10
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
    },
    bodyText:{
        fontSize: 30,
        color: 'white'
    },
    alertTitle:{
        fontSize: 28,
        color: 'red'
    },
    alertMessage:{
        color: 'black',
        fontSize: 22
    },
    white:{
        color: 'white',
    },
    center:{
        alignItems: 'center'
    },
    
});