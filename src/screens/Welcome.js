import React from "react";
import { View, Image, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity, Button} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../store/userAction";

const screen = Dimensions.get('screen');

const Welcome = ({navigation}) => {
    const {openDrawer}= navigation;
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
                    colors={['#833ab4','#fd1d1d','#fcb045']}
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
    },
    
    
});